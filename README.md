# Image-search

Image-finder application helps you find all the relevant images of your choice from all over the internet by just typing a keyword.
This is a frontend web-application for finding all images on an infinitely scrollable web page. It uses a tech stack of HTML, CSS, ReactJs & NodeJs.
This application uses its own dockerfile to create its docker image.

How to install and run the project.

# Prerequisite:
You should have docker-desktop or docker-agent installed on your system.

# Steps to run:
1. Git clone the project to your local.
2. Change directory to project root.
3. Open any terminal-emulator [cmd/git-bash/powershell]
4. Run docker build -t image-finder .
5. Run the container using command: docker run -p 9093:3000 image-finder
6. launch the application in your browser: http://localhost:9093

# Overall Code Coverage:

![badge-lines](https://user-images.githubusercontent.com/70306563/183551972-ae34f172-7792-47ea-be89-3e8dcb8f7ede.svg)
![badge-statements](https://user-images.githubusercontent.com/70306563/183552012-615affca-6473-4a15-ad74-cf81ac7d18f9.svg)
![badge-functions](https://user-images.githubusercontent.com/70306563/183552017-2bc3dbb6-b80d-406a-8d63-822027a47685.svg)
![badge-branches](https://user-images.githubusercontent.com/70306563/183552023-d82d6223-6fd4-431f-b271-be4a54d2d408.svg)

In depth coverage for each of the components 

# Error Component
![Capture](https://user-images.githubusercontent.com/70306563/183552767-6bb7c2e7-fcdb-41f4-a5a5-51db2a54bb0a.PNG)

# Header Component
![Capture](https://user-images.githubusercontent.com/70306563/183553028-2c2f6329-4c6a-42b5-b640-93cd6c2a4680.PNG)

# image-card component
![Capture](https://user-images.githubusercontent.com/70306563/183553182-1dea5bed-28ca-46d8-9428-bfb8199a54a6.PNG)

# search-engine component
![Capture](https://user-images.githubusercontent.com/70306563/183553289-7a650bfd-f5d1-4f9f-99ac-4d1187267104.PNG)
