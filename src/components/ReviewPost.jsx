import React from "react";

function ReviewPost() {
  return (
        <form class=" flex justify-center">
            <div class="mb-4 w- bg-fgrey rounded-lg border border-gray-900   ">
                <div class="py-2 px-4 bg-grey-800 rounded-t-lg dark:bg-gray-800">
                    <textarea id="comment" rows="1" class="px-0 w-full text-sm bg-gray-800 focus:ring-0 text-white placeholder-gray-400" placeholder="Write a review..." required=""></textarea>
                </div>
                <div class="flex justify-between items-center py-2 px-3 border-t border-gray-600">
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-small text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800">
                        Post Review
                    </button>
                    
                </div>

            </div>
        </form>
  )

        
  
};

export default ReviewPost;
