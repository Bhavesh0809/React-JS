import { storage } from './firebase-config.js';
import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const progressBar = document.getElementById('progressBar');
const gallery = document.getElementById('gallery');

uploadBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (!file) return alert("Please select a file first!");

    // 1. Create a unique path for the file
    const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);

    // 2. Start the upload
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progressBar.style.width = progress + "%";
            progressBar.innerText = Math.round(progress) + "%";
        }, 
        (error) => {
            console.error("Upload failed:", error);
            alert("Upload failed. Check your Security Rules!");
        }, 
        () => {
            // 3. Success! Get the URL and show the image
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                const img = document.createElement('img');
                img.src = url;
                img.style.width = "200px";
                gallery.appendChild(img);
                alert("Upload Complete!");
            });
        }
    );
});