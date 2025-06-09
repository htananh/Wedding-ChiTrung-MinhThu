var a = class {
    constructor() {
        this.toastAnimation = () => {
            let e = document.querySelector(".send-love figure")
              , t = document.querySelector(".toast");
            function n() {
                t && (t.style.opacity = "0",
                setTimeout( () => {
                    t.style.opacity = "1"
                }
                , 2e3))
            }
            setInterval(n, 6e3);
            function o() {
                e.style.animation = "none",
                e.offsetWidth,
                e.style.animation = "shake 0.3s"
            }
            setInterval(o, 2e3)
        }
        ;
        this.heartShow = () => {
          console.log("heartShow");
            setInterval( () => {
                let e = document.createElement("div");
                e.className = "heartShow",
                e.innerHTML = "🌸",
                e.style.left = Math.random() * 100 + "vw",
                e.style.fontSize = Math.random() * 10 + 10 + "px",
                e.style.animationDuration = 6 + Math.random() * 2 + "s",
                document.body.appendChild(e),
                setTimeout( () => {
                    e.remove()
                }
                , 5e3)
            }
            , 800)
        }
        ;
        this.modal = () => {
            let e = document.querySelector(".modal-overlay");
            document.querySelector(".send-love figure").addEventListener("click", function() {
                e.classList.add("show"),
                console.log(1)
            }),
            e.addEventListener("click", function(n) {
                n.target === e && e.classList.remove("show")
            }),
            document.addEventListener("keydown", function(n) {
                n.key === "Escape" && e.classList.remove("show")
            })
        }
        ;
        this.playAudio = () => {
            let e = document.getElementById("wedding-audio");
            if (!e)
                return;
            let t = document.querySelector(".toggle-audio-img");
            
            const updateMusicState = (isPlaying) => {
                if (t) {
                    if (isPlaying) {
                        t.classList.add('playing');
                    } else {
                        t.classList.remove('playing');
                    }
                }
            };

            const n = () => {
                e.play().then(() => {
                    updateMusicState(true);
                }).catch(o => {
                    console.warn("Không thể phát nhạc:", o);
                    updateMusicState(false);
                });
                document.removeEventListener("click", n);
                document.removeEventListener("touchstart", n);
            };

            document.addEventListener("click", n);
            document.addEventListener("touchstart", n);

            // Update initial state
            updateMusicState(!e.paused);

            t && t.addEventListener("click", o => {
                o.stopPropagation();
                if (e.paused) {
                    e.play().then(() => {
                        updateMusicState(true);
                    }).catch(s => {
                        console.warn("Không thể phát nhạc:", s);
                        updateMusicState(false);
                    });
                } else {
                    e.pause();
                    updateMusicState(false);
                }
            });

            // Listen for play/pause events
            e.addEventListener('play', () => updateMusicState(true));
            e.addEventListener('pause', () => updateMusicState(false));
        };
        this.toastAnimation(),
        this.heartShow(),
        this.playAudio(),
        this.modal()
        
    }
}
;
window.addEventListener("DOMContentLoaded", () => {
  // Add video control for background music
  const video = document.querySelector('video');
  const bgMusic = document.getElementById('wedding-audio');
  const musicToggleImg = document.querySelector('.toggle-audio-img');
  
  if (video && bgMusic && musicToggleImg) {
    video.addEventListener('play', () => {
      bgMusic.pause();
      musicToggleImg.src = "/assets/images/audio-open.png";
      musicToggleImg.classList.remove('playing');
    });
    
    video.addEventListener('pause', () => {
      bgMusic.play().then(() => {
        musicToggleImg.src = "/assets/images/audio-open.png";
        musicToggleImg.classList.add('playing');
      }).catch(err => {
        console.warn("Không thể phát nhạc:", err);
      });
    });
  }
   new a() 
} 
);

export {a as default};

// Message handling
const SUPABASE_URL = 'https://abpeigzmzidoytxtrmym.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicGVpZ3ptemlkb3l0eHRybXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDU1NTYsImV4cCI6MjA2NDYyMTU1Nn0.21vzecM1ss2E8V2UXvV7GKRc3-mfj6eWGBWagOEaoK8';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const messagesContainer = document.getElementById('messagesContainer');
const wishForm = document.getElementById('wishForm');

function createMessageCard(data) {
  const messageCard = document.createElement('div');
  messageCard.className = 'message-card';

  const date = new Date(data.created_at || new Date());
  const formattedDate = date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  messageCard.innerHTML = `
    <div class="message-header">
      <div class="message-avatar">${data.name.charAt(0).toUpperCase()}</div>
      <div class="message-info">
        <div class="message-name">${data.name}</div>
        <div class="message-date">${formattedDate}</div>
      </div>
    </div>
    <div class="message-content">${data.message}</div>
    <div class="message-attendance">
      ${data.attendance === 'yes' ? '✅ Sẽ tham dự' : '❌ Không thể tham dự'}
    </div>
  `;

  return messageCard;
}
async function loadMessages() {
  console.log('loadMessages');
  const { data, error } = await supabase
    .from('wishes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Lỗi khi tải lời chúc:', error.message);
    return;
  }
  console.log(data);
  const messagesContainer = document.getElementById('messages'); // ID vùng hiển thị lời chúc
  messagesContainer.innerHTML = ''; // Xoá cũ nếu có

  data.forEach(entry => {
    const messageCard = createMessageCard(entry);
    messagesContainer.appendChild(messageCard);
  });

  // updateScrollAnimation(); // nếu bạn có dùng hiệu ứng cuộn
}


// function updateScrollAnimation() {
//   const cards = messagesContainer.children;
//   const totalCards = cards.length;
//   messagesContainer.style.setProperty('--total-cards', totalCards);

//   const clonedCards = Array.from(cards).map(card => card.cloneNode(true));
//   clonedCards.forEach(card => messagesContainer.appendChild(card));
// }

async function handleSubmit(event) {
  event.preventDefault();

  const submitBtn = event.target.querySelector('.submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Đang gửi...';

  try {
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const message = formData.get('message');
    const attendance = formData.get('attendance');

    const { data, error } = await supabaseClient
      .from('wishes')
      .insert([{ 
        name, 
        message, 
        attendance,
        created_at: new Date().toISOString()
      }]);

    if (error) throw error;

    const messageCard = createMessageCard({ 
      name, 
      message, 
      attendance,
      created_at: new Date().toISOString()
    });
    
    messagesContainer.insertBefore(messageCard, messagesContainer.firstChild);
    // updateScrollAnimation();
    event.target.reset();
    await loadWishes();

  } catch (error) {
    console.error('Error:', error);
    alert('Lỗi gửi lời chúc. Vui lòng thử lại.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Gửi Lời Chúc';
  }
}

async function loadWishes() {
  try {
    const { data: wishes, error } = await supabaseClient
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    if (wishes && wishes.length > 0) {
      wishes.forEach(wish => {
        const messageCard = createMessageCard(wish);
        messagesContainer.appendChild(messageCard);
      });
      // updateScrollAnimation();
    }
  } catch (error) {
    console.error('Error loading wishes:', error);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (messagesContainer) {
    loadWishes();
    // updateScrollAnimation();
    messagesContainer.addEventListener('animationend', () => {
      messagesContainer.style.animation = 'none';
      messagesContainer.offsetHeight;
      messagesContainer.style.animation = 'scrollMessages 30s linear infinite';
    });
  }

  if (wishForm) {
    wishForm.addEventListener('submit', handleSubmit);
  }
});
