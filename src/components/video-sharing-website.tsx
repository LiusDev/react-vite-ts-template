"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Menu, ThumbsUp, ThumbsDown, Share2, Bell } from "lucide-react"

export function VideoSharingWebsiteComponent() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 bg-background border-b">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                        <h1 className="text-xl font-bold">VideoTube</h1>
                    </div>
                    <div className="flex-1 max-w-xl mx-4">
                        <form className="relative">
                            <Input
                                className="w-full pl-10 pr-4"
                                placeholder="Search"
                                type="search"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </form>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-6 w-6" />
                        </Button>
                        <Avatar>
                            <AvatarImage
                                src="/placeholder-user.jpg"
                                alt="User"
                            />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>
            <main className="flex-1 container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <iframe
                            width="1104"
                            height="621"
                            src="https://www.youtube.com/embed/V2zozftmfqc?si=dVvcZd9TWXSZ7iju"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Video Title</h2>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage
                                        src="/placeholder-user.jpg"
                                        alt="Channel"
                                    />
                                    <AvatarFallback>C</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">
                                        Channel Name
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        1M subscribers
                                    </p>
                                </div>
                                <Button>Subscribe</Button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button variant="outline">
                                    <ThumbsUp className="h-4 w-4 mr-2" />
                                    10K
                                </Button>
                                <Button variant="outline">
                                    <ThumbsDown className="h-4 w-4 mr-2" />
                                    Dislike
                                </Button>
                                <Button variant="outline">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                        <p className="font-semibold">1M views • 1 month ago</p>
                        <p className="mt-2">
                            Video description goes here. This is a placeholder
                            text for the video description. It can contain
                            multiple lines and provide information about the
                            video content.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/4 space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex space-x-2">
                            <div className="w-40 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    src={`/placeholder.svg?height=90&width=160`}
                                    alt={`Thumbnail ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Recommended Video {i}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Channel Name
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    100K views • 1 week ago
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
