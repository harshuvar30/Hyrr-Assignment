import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Post Title here checkout terimummy ling ling
          </h1>

          <div className="flex item-center gap-8 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Jhon Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web-Design</Link>
            <span>2 days</span>
          </div>
          <p className="text-gray-500 font-medium">
            This is a sample post. This is a sample post. This is a sample post.
            This is a sample post. This is a sample post. This is a sample post.
            This is a sample post. This is a sample post. This is a sample post.
            This is a
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" className="rounded-2xl" w="600" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Text */}
        <div className="lg:text-lg flex flex-col gap-8 text-justify">
         <p>
         What is Web Design? Web Design is a field related to designing
          websites on the Internet. Without a good design, a website fails to
          perform well and cannot produce a good impact on the user. Design is a
          creative process that affects the ranking of the brand. A good website
          design helps to create an engaging online presence that captivates the
          audience. Before beginning to design a website a user has to be clear
          about what web designing is. It is the art of making websites look and
          feel good to the user and providing easy access to the website
          features to the client. It focuses on improving the user experience
          rather than development. Also explore: Recent Articles on Web Design
          Types of Web design The following are the types in which you can do
          Web Design: Static Website: This type of design is used when little or
          no interaction is required from the user. Dynamic Website: When user
          interaction is required and information is to be displayed according
          to the request then a dynamic design pattern is followed. E-commerce
          Website: This type of website design is required when a business wants
          to sell their products to the consumer. Flat Design: Minimalist
          approach characterized by clean, simple elements, vibrant colors, and
          absence of textures or gradients. Neuromorphic Design: Mimics physical
          interactions and textures, creating interfaces that blend realism with
          digital functionality. Minimalism Design: Focuses on stripping away
          unnecessary elements, favoring simplicity, clean lines, and ample
          white space for an uncluttered user experience. Why to Learn Web
          Design? Web Design helps to make your web pages stand out in terms of
          design and user experience. It integrates technical and creative
          skills, by which you can build and maintain web pages very easily and
          allows you to express your creativity and artistic talents. Getting
          Started with Free Web Design Tutorial Here are all the important
          concepts that come under the domain of Web Design. After completing
          this free tutorial, you’ll have a basic understanding of the art of
          Web design and be ready for the changing needs of users and
          businesses.
         </p>


         <p>
         What is Web Design? Web Design is a field related to designing
          websites on the Internet. Without a good design, a website fails to
          perform well and cannot produce a good impact on the user. Design is a
          creative process that affects the ranking of the brand. A good website
          design helps to create an engaging online presence that captivates the
          audience. Before beginning to design a website a user has to be clear
          about what web designing is. It is the art of making websites look and
          feel good to the user and providing easy access to the website
          features to the client. It focuses on improving the user experience
          rather than development. Also explore: Recent Articles on Web Design
          Types of Web design The following are the types in which you can do
          Web Design: Static Website: This type of design is used when little or
          no interaction is required from the user. Dynamic Website: When user
          interaction is required and information is to be displayed according
          to the request then a dynamic design pattern is followed. E-commerce
          Website: This type of website design is required when a business wants
          to sell their products to the consumer. Flat Design: Minimalist
          approach characterized by clean, simple elements, vibrant colors, and
          absence of textures or gradients. Neuromorphic Design: Mimics physical
          interactions and textures, creating interfaces that blend realism with
          digital functionality. Minimalism Design: Focuses on stripping away
          unnecessary elements, favoring simplicity, clean lines, and ample
          white space for an uncluttered user experience. Why to Learn Web
          Design? Web Design helps to make your web pages stand out in terms of
          design and user experience. It integrates technical and creative
          skills, by which you can build and maintain web pages very easily and
          allows you to express your creativity and artistic talents. Getting
          Started with Free Web Design Tutorial Here are all the important
          concepts that come under the domain of Web Design. After completing
          this free tutorial, you’ll have a basic understanding of the art of
          Web design and be ready for the changing needs of users and
          businesses.
         </p>


         <p>
         What is Web Design? Web Design is a field related to designing
          websites on the Internet. Without a good design, a website fails to
          perform well and cannot produce a good impact on the user. Design is a
          creative process that affects the ranking of the brand. A good website
          design helps to create an engaging online presence that captivates the
          audience. Before beginning to design a website a user has to be clear
          about what web designing is. It is the art of making websites look and
          feel good to the user and providing easy access to the website
          features to the client. It focuses on improving the user experience
          rather than development. Also explore: Recent Articles on Web Design
          Types of Web design The following are the types in which you can do
          Web Design: Static Website: This type of design is used when little or
          no interaction is required from the user. Dynamic Website: When user
          interaction is required and information is to be displayed according
          to the request then a dynamic design pattern is followed. E-commerce
          Website: This type of website design is required when a business wants
          to sell their products to the consumer. Flat Design: Minimalist
          approach characterized by clean, simple elements, vibrant colors, and
          absence of textures or gradients. Neuromorphic Design: Mimics physical
          interactions and textures, creating interfaces that blend realism with
          digital functionality. Minimalism Design: Focuses on stripping away
          unnecessary elements, favoring simplicity, clean lines, and ample
          white space for an uncluttered user experience. Why to Learn Web
          Design? Web Design helps to make your web pages stand out in terms of
          design and user experience. It integrates technical and creative
          skills, by which you can build and maintain web pages very easily and
          allows you to express your creativity and artistic talents. Getting
          Started with Free Web Design Tutorial Here are all the important
          concepts that come under the domain of Web Design. After completing
          this free tutorial, you’ll have a basic understanding of the art of
          Web design and be ready for the changing needs of users and
          businesses.
         </p>
        </div>
        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">

          <div className="flex items-center gap-8">
            <Image
             src="userImg.jpeg"
             className="rounded-full h-12 w-12 object-cover"
             w="48"
             h="48"
              />
            <Link className="text-blue-800 ">Jhon Doe</Link>
          </div>
            <p className="text-sm text-gray-500">li ldsj jlj lks lnkn kldeihkvnneior vnoawlkdfh </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
          </div>
            </div>
          <PostMenuActions/>
          <h1 className="mb-4 mt-8 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">Web-Design</Link>
            <Link className="underline" to="/">Development</Link>
            <Link className="underline" to="/">Database</Link>
            <Link className="underline" to="/">Search-Engines</Link>
            <Link className="underline" to="/">Marketing</Link>
          </div>
          <h1 className="mb-4 mt-8 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>      
    </div>
  );
}

export default SinglePostPage;
