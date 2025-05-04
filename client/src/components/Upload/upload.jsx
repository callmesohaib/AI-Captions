import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [caption, setCaption] = useState('');
    const navigate = useNavigate();

    const onDrop = useCallback((acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);

        // Create preview
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(selectedFile);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/webp': ['.webp']
          },
        maxFiles: 1
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        setIsLoading(true);

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                setCaption(response.data.caption);
            } else {
                setCaption('Failed to generate caption.');
            }
        } catch (err) {
            console.error(err);
            setCaption('Error occurred while generating caption.');
        } finally {
            setIsLoading(false);
        }
    };


    const handleReset = () => {
        setFile(null);
        setPreview(null);
        setCaption('');
    };

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Generate AI Captions</h1>
                    <p className="text-xl text-gray-600">
                        Upload your image and get an accurate description in seconds
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-6">
                        {/* Upload Section */}
                        <div>
                            <div
                                {...getRootProps()}
                                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                                    }`}
                            >
                                <input {...getInputProps()} />
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <svg
                                        className="w-12 h-12 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    {isDragActive ? (
                                        <p className="text-blue-600 font-medium">Drop the image here</p>
                                    ) : (
                                        <>
                                            <p className="font-medium text-gray-700">
                                                Drag & drop an image, or click to select
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Supports JPEG, PNG, WEBP (Max 5MB)
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>

                            {file && (
                                <div className="mt-6 flex justify-between">
                                    <button
                                        onClick={handleReset}
                                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                                    >
                                        Clear
                                    </button>
                                    <span className="text-sm text-gray-500 truncate max-w-xs">
                                        {file.name}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Preview Section */}
                        <div className="flex flex-col">
                            {preview ? (
                                <div className="flex-1 flex flex-col">
                                    <div className="rounded-lg overflow-hidden mb-4 border border-gray-200">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className={`w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center">
                                                <svg
                                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Generating...
                                            </span>
                                        ) : (
                                            'Generate Caption'
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                                    <p className="text-gray-500 text-center p-6">
                                        Image preview will appear here
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Results Section */}
                    {caption && (
                        <div className="border-t border-gray-200 p-6 bg-gray-50">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Generated Caption</h3>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <p className="text-gray-800">{caption}</p>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                                <button
                                    onClick={() => navigator.clipboard.writeText(caption)}
                                    className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
                                >
                                    Copy Text
                                </button>
                                <button
                                    onClick={handleReset}
                                    className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                                >
                                    Generate Another
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Upload;