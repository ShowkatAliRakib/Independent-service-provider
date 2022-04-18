import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
        <div className=" blog-card">
               <div>
        <h1> Question no 01- Authentication এবং Authorization পার্থক্য কি </h1>
      <p>
       <h2> Ans - </h2>★
        Authentication user কে যাচাই করে,
        ★ কিন্তু Authorization কোন রিসোর্সের
        অ্যাক্সেস এর অনুমতি প্রদান করে ★ Authentication হলো একটি ভালো পরিচয় এবং
        ওয়েবসাইটে প্রবেশ প্রক্রিয়ার ১ম ধাপ,★ আর Authorization একটি সেটিংসের
        মাধ্যমে কাজ করে যা অন্য একটি organization দ্বারা বাস্তবায়িত করা হয় ★
        Authentication user এর কাছে দৃশ্যমান এবং কিছুটা পরিবর্তনীয়,★ কিন্তু
        Authorization user এর কাছে দৃশ্যমান নয় এবং পরিবর্তনীয় ও নয়
      </p>
    </div> 
    <hr />
    <div>
        <h1> Question no 02- 

Firebase কেন us করা উচিত?  
 </h1>
      <p>
       <h2> Ans - </h2>★
       ফায়ারবেস ব্যবহার করা উচিত তার কারণ হচ্ছে ফায়ারেস আমাদেরকে Authentication and authorizetion কে খুব সহজ করে দিয়েছে এবং Google and Facebook and Github এগুলো ছাড়া ও আরো অনেক  3rd party us করা যায়, Firebase ঠিকঠাক deployer সুবিধা ও পাওয়া যায়

      </p>
    </div> 
    <hr />
   
      
    



















        </div>
  );
};

export default Blogs;
