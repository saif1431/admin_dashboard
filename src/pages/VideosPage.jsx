import React, { useState } from 'react';
import { Play, Trash2, Eye, Filter, Search, Calendar, Clock, Share2, MoreHorizontal, Download, Zap } from 'lucide-react';
import { videosData } from '../data/mockData';
import {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
} from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const VideosPage = () => {
      const [videos, setVideos] = useState(videosData);
      const [selectedVideo, setSelectedVideo] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [videoToDelete, setVideoToDelete] = useState(null);
      const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

      const getStatusVariant = (status) => {
            switch (status) {
                  case 'Completed': return 'success';
                  case 'Processing': return 'warning';
                  case 'Failed': return 'danger';
                  default: return 'default';
            }
      };

      const handleViewDetails = (video) => {
            setSelectedVideo(video);
            setIsModalOpen(true);
      };

      const confirmDelete = (video) => {
            setVideoToDelete(video);
            setIsDeleteModalOpen(true);
      };

      const handleDelete = () => {
            if (videoToDelete) {
                  setVideos(videos.filter(v => v.id !== videoToDelete.id));
                  setIsDeleteModalOpen(false);
                  setVideoToDelete(null);
            }
      };

      return (
            <div className="space-y-6">
                  <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Videos</h2>
                        <div className="flex items-center gap-3">
                              <Button variant="outline" size="sm" className="flex items-center gap-3 hover:bg-gray-50">
                                    <Filter size={16} />
                                    Filter
                              </Button>
                              <Button size="sm" className="flex items-center gap-3 shadow-sm">
                                    <Play size={16} fill="currentColor" />
                                    New Video
                              </Button>
                        </div>
                  </div>

                  <Card>
                        <CardHeader className="flex flex-row items-center flex-wrap justify-between border-none gap-4">
                              <CardTitle>All Videos</CardTitle>
                              <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                    <input
                                          type="text"
                                          placeholder="Search videos..."
                                          className="h-9 w-64 rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    />
                              </div>
                        </CardHeader>
                        <CardContent className="p-0">
                              <Table>
                                    <TableHeader>
                                          <TableRow>
                                                <TableHead>Video</TableHead>
                                                <TableHead>Duration</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Date</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                          </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                          {videos.map((video) => (
                                                <TableRow key={video.id}>
                                                      <TableCell>
                                                            <div className="flex items-center gap-3">
                                                                  <div className="relative group cursor-pointer" onClick={() => handleViewDetails(video)}>
                                                                        <img
                                                                              src={video.thumbnail}
                                                                              alt={video.name}
                                                                              className="h-10 w-16 rounded object-cover border border-gray-100 transition-transform group-hover:scale-105"
                                                                        />
                                                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                                                                              <Play size={12} className="text-white fill-white" />
                                                                        </div>
                                                                  </div>
                                                                  <span className="font-medium text-gray-900 active:text-blue-600 cursor-pointer" onClick={() => handleViewDetails(video)}>
                                                                        {video.name}
                                                                  </span>
                                                            </div>
                                                      </TableCell>
                                                      <TableCell>
                                                            <div className="flex items-center gap-2 text-gray-600">
                                                                  <Clock size={14} />
                                                                  {video.duration}
                                                            </div>
                                                      </TableCell>
                                                      <TableCell>
                                                            <Badge variant={getStatusVariant(video.status)}>{video.status}</Badge>
                                                      </TableCell>
                                                      <TableCell className="text-gray-500">
                                                            <div className="flex items-center gap-2">
                                                                  <Calendar size={14} />
                                                                  {video.date}
                                                            </div>
                                                      </TableCell>
                                                      <TableCell className="text-right">
                                                            <div className="flex justify-end gap-2">
                                                                  <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="h-8 w-8 p-0"
                                                                        onClick={() => handleViewDetails(video)}
                                                                  >
                                                                        <Eye size={16} className="text-gray-500" />
                                                                  </Button>
                                                                  <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="h-8 w-8 p-0 hover:text-red-600 hover:bg-red-50"
                                                                        onClick={() => confirmDelete(video)}
                                                                  >
                                                                        <Trash2 size={16} />
                                                                  </Button>
                                                            </div>
                                                      </TableCell>
                                                </TableRow>
                                          ))}
                                          {videos.length === 0 && (
                                                <TableRow>
                                                      <TableCell colSpan={5} className="py-12 text-center text-gray-500">
                                                            No videos found. Create a new one to get started.
                                                      </TableCell>
                                                </TableRow>
                                          )}
                                    </TableBody>
                              </Table>
                        </CardContent>
                  </Card>

                  {/* Video Detail Modal */}
                  <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="Video Details"
                        className="max-w-3xl"
                  >
                        {selectedVideo && (
                              <div className="space-y-6">
                                    <div className="aspect-video w-full rounded-xl bg-gray-900 overflow-hidden relative group">
                                          <img
                                                src={selectedVideo.thumbnail}
                                                alt={selectedVideo.name}
                                                className="w-full h-full object-cover opacity-80"
                                          />
                                          <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl cursor-pointer hover:bg-blue-700 transition-colors">
                                                      <Play size={32} fill="currentColor" className="ml-1" />
                                                </div>
                                          </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                          <div>
                                                <h4 className="text-2xl font-bold text-gray-900">{selectedVideo.name}</h4>
                                                <div className="flex items-center gap-3 mt-2">
                                                      <Badge variant={getStatusVariant(selectedVideo.status)}>{selectedVideo.status}</Badge>
                                                      <span className="text-sm text-gray-500 flex items-center gap-1">
                                                            <Clock size={14} /> {selectedVideo.duration}
                                                      </span>
                                                      <span className="text-sm text-gray-500 flex items-center gap-1">
                                                            <Calendar size={14} /> {selectedVideo.date}
                                                      </span>
                                                </div>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <Button variant="outline" className="flex items-center gap-2">
                                                      <Share2 size={16} />
                                                      Share
                                                </Button>
                                                <Button className="flex items-center gap-2">
                                                      <Download size={16} />
                                                      Download
                                                </Button>
                                                <Button variant="ghost" className="h-10 w-10 p-0 border border-gray-100">
                                                      <MoreHorizontal size={20} />
                                                </Button>
                                          </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                                          <div className="space-y-1">
                                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resolution</p>
                                                <p className="text-sm font-medium text-gray-900">1080p (Full HD)</p>
                                          </div>
                                          <div className="space-y-1">
                                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">File Size</p>
                                                <p className="text-sm font-medium text-gray-900">24.5 MB</p>
                                          </div>
                                          <div className="space-y-1">
                                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Source</p>
                                                <p className="text-sm font-medium text-gray-900">Nexus AI Engine</p>
                                          </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
                                          <Zap size={20} className="text-blue-600 mt-0.5" fill="currentColor" />
                                          <div>
                                                <p className="text-sm font-semibold text-blue-900">AI Insights</p>
                                                <p className="text-sm text-blue-700 mt-1">
                                                      This video performed 24% better than average. Engagement peaks at 0:15.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </Modal>

                  {/* Delete Confirmation Modal */}
                  <Modal
                        isOpen={isDeleteModalOpen}
                        onClose={() => setIsDeleteModalOpen(false)}
                        title="Delete Video"
                        className="max-w-md"
                  >
                        <div className="space-y-4">
                              <div className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                                    <Trash2 size={24} />
                              </div>
                              <div className="text-center">
                                    <h4 className="text-lg font-bold text-gray-900">Are you sure?</h4>
                                    <p className="text-sm text-gray-500 mt-2">
                                          You are about to delete <span className="font-semibold text-gray-900 active:text-blue-600">{videoToDelete?.name}</span>.
                                          This action cannot be undone.
                                    </p>
                              </div>
                              <div className="flex gap-3 pt-4">
                                    <Button variant="outline" className="flex-1" onClick={() => setIsDeleteModalOpen(false)}>
                                          Cancel
                                    </Button>
                                    <Button variant="danger" className="flex-1" onClick={handleDelete}>
                                          Delete
                                    </Button>
                              </div>
                        </div>
                  </Modal>
            </div>
      );
};

export default VideosPage;
