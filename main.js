   let heartIcon = document.getElementById("heart");
        let likeCount = document.getElementById("likeCount");

        let count = 0;
        heartIcon.addEventListener("click", function() {
            count++;
            likeCount.innerText = count;
        });