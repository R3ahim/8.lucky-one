import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div className='answer'>
            <h3>hwo react work</h3>
            <p>
            ReactJS হল মোবাইল এবং ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টের জন্য সবচেয়ে জনপ্রিয় জাভাস্ক্রিপ্ট লাইব্রেরিগুলির মধ্যে একটি। Facebook দ্বারা তৈরি, React-এ পুনঃব্যবহারযোগ্য জাভাস্ক্রিপ্ট কোড স্নিপেটগুলির একটি সংগ্রহ রয়েছে যা একটি উপাদান নামক ব্যবহারকারী ইন্টারফেস (UI) তৈরির জন্য ব্যবহৃত হয়।
            কিছু সময় এটি নকল ইউআই এবং যদি আমি UI-তে কোনও জিনিস পরিবর্তন করি তবে এটি সমস্ত অঞ্চল অনুসন্ধান করছে এটি ঠিক যেখানে আমরা পরিবর্তন করব তা দেখতে হবে এবং
তাই রিঅ্যাক্ট js অন্য যেকোন js -libray এর পরে দ্রুত করতে হ
এটা মনে রাখা গুরুত্বপূর্ণ যে ReactJS একটি JavaScript ফ্রেমওয়ার্ক নয়। কারণ এটি শুধুমাত্র একটি অ্যাপ্লিকেশনের ভিউ লেয়ারের বিষয়বস্তু রেন্ডার করার জন্য দায়ী। বেশিরভাগ ফ্রন্ট-এন্ড জাভাস্ক্রিপ্ট ডেভেলপাররা জটিল ফাংশন তৈরি করতে এটি কৌণিক এবং Vue-এর মতো ফ্রেমওয়ার্কের সাথে একত্রিত করে।
বে

            </p>
            <h3>what is the differnet between props and state</h3>
            <p>ডেটা এক উপাদান থেকে অন্য উপাদানে প্রেরণ করা হয়। তথ্য শুধুমাত্র উপাদান মধ্যে পাস করা হয়.
                এটি অপরিবর্তনীয় (পরিবর্তন করা যাবে না)। এটি পরিবর্তনযোগ্য (পরিবর্তন করা যেতে পারে)।
                রাজ্য এবং কার্যকরী উপাদানগুলির সাথে প্রপস ব্যবহার করা যেতে পারে। State শুধুমাত্র State Component/ Class Component এর সাথে ব্যবহার করা যেতে পারে।
                প্রপস শুধুমাত্র পড়া. রাষ্ট্র পঠিত এবং লিখিত উভয়ই.
                usestate can use anywere
                but props use only one Component
                </p>



        </div>
    );
};

export default Answer;