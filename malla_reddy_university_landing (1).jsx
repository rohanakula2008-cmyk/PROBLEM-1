<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Malla Reddy University</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: black; }
    .chat-box { display: none; }
  </style>
</head>
<body class="text-gray-100 antialiased">
  <!-- Header -->
  <header class="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-rose-500 flex items-center justify-center text-white font-bold text-lg">MR</div>
        <div>
          <h1 class="text-xl font-semibold">Malla Reddy University</h1>
          <p class="text-xs text-gray-400">Intelligent Campus Information System</p>
        </div>
      </div>
      <nav class="hidden md:flex gap-6 text-sm text-gray-300 items-center">
        <a href="#founder" class="hover:text-white">Founder</a>
        <a href="#fee" class="hover:text-white">Fee Structure</a>
        <a href="#events" class="hover:text-white">Events</a>
        <a href="#clubs" class="hover:text-white">Clubs</a>
        <a href="#courses" class="hover:text-white">Courses</a>
        <a href="#placements" class="hover:text-white">Placements</a>
        <button onclick="toggleChat()" class="px-3 py-1 rounded-md border border-gray-700 text-sm">Ask</button>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="max-w-6xl mx-auto px-6 py-12">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-4xl font-extrabold leading-tight">Join Malla Reddy University</h2>
        <p class="mt-4 text-gray-300 max-w-xl">A campus that blends strong academics, active industry partnerships, and student-first facilities. Experience world-class labs, a vibrant student life, and excellent placement support.</p>

        <ul class="mt-6 space-y-3 text-gray-300">
          <li>• Industry-aligned curriculum and internships</li>
          <li>• Dedicated placement & training cell</li>
          <li>• Strong research and incubation support</li>
          <li>• Wide range of clubs and extracurriculars</li>
        </ul>

        <div class="mt-6 flex gap-3">
          <a href="#apply" class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-rose-500 text-white shadow-lg">Apply to Campus</a>
          <button onclick="toggleChat()" class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-700 text-gray-100 hover:bg-gray-900">Ask a Question</button>
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden shadow-2xl">
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80" alt="Malla Reddy Campus" class="w-full h-80 object-cover" />
      </div>
    </section>

    <!-- Founder -->
    <section id="founder" class="mt-16 bg-gray-900/40 rounded-2xl p-6 border border-gray-800">
      <h3 class="text-2xl font-semibold">Founder</h3>
      <p class="mt-3 text-gray-300">Dr. Malla Reddy founded this institute with the goal of providing quality technical education and fostering innovation.</p>
    </section>

    <!-- Info Sections -->
    <div class="grid md:grid-cols-3 gap-6 mt-10">
      <section id="fee" class="bg-gray-900/30 rounded-xl p-5 border border-gray-800">
        <h4 class="font-semibold text-lg">Fee Structure</h4>
        <p class="mt-3 text-gray-300 text-sm">B.Tech: ₹1,20,000 - ₹2,00,000 / year; MBA: ₹1,50,000 / year.</p>
      </section>
      <section id="events" class="bg-gray-900/30 rounded-xl p-5 border border-gray-800">
        <h4 class="font-semibold text-lg">Events</h4>
        <p class="mt-3 text-gray-300 text-sm">TechFest, Cultural Carnival, Workshops, Research Symposiums.</p>
      </section>
      <section id="clubs" class="bg-gray-900/30 rounded-xl p-5 border border-gray-800">
        <h4 class="font-semibold text-lg">Clubs</h4>
        <p class="mt-3 text-gray-300 text-sm">Robotics Club, CodeCell, Entrepreneurship Cell, Music Club, Sports Club.</p>
      </section>
      <section id="courses" class="bg-gray-900/30 rounded-xl p-5 border border-gray-800">
        <h4 class="font-semibold text-lg">Courses</h4>
        <p class="mt-3 text-gray-300 text-sm">B.Tech, MBA, M.Tech, MCA, BBA, Certificate programs.</p>
      </section>
    </div>

    <!-- Placements -->
    <section id="placements" class="mt-12 bg-gray-900/30 rounded-2xl p-6 border border-gray-800">
      <h3 class="text-2xl font-semibold">Placements</h3>
      <table class="w-full text-left text-sm border-collapse mt-6">
        <thead>
          <tr class="text-gray-300/80">
            <th class="py-2 pr-6">Year</th>
            <th class="py-2 pr-6">Top Recruiters</th>
            <th class="py-2 pr-6">Highest Package</th>
            <th class="py-2 pr-6">Average Package</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-gray-800">
            <td class="py-3">2024</td>
            <td class="py-3">Google, Amazon, Microsoft, TCS, Infosys</td>
            <td class="py-3">₹24 LPA</td>
            <td class="py-3">₹6.8 LPA</td>
          </tr>
          <tr class="border-t border-gray-800">
            <td class="py-3">2023</td>
            <td class="py-3">Accenture, Deloitte, Wipro, Capgemini</td>
            <td class="py-3">₹18 LPA</td>
            <td class="py-3">₹5.5 LPA</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="mt-12">
      <h3 class="text-2xl font-semibold">Campus Gallery</h3>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80" class="rounded-xl object-cover h-48" alt="campus 1" />
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" class="rounded-xl object-cover h-48" alt="campus 2" />
        <img src="https://images.unsplash.com/photo-1508904101673-56f0b8b2f1d2?auto=format&fit=crop&w=1200&q=80" class="rounded-xl object-cover h-48" alt="campus 3" />
      </div>
    </section>

    <!-- Apply -->
    <section id="apply" class="mt-12 bg-gray-900/40 rounded-2xl p-6 border border-gray-800 flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-semibold">Apply to Campus</h3>
        <p class="mt-2 text-gray-300">Ready to join? Click below to apply.</p>
      </div>
      <button onclick="alert('Application form placeholder')" class="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-rose-500 px-5 py-3 rounded-2xl shadow-lg">
        <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">A</span>
        <div class="text-left">
          <div class="text-sm font-semibold">Apply Now</div>
          <div class="text-xs text-gray-200">Start your application</div>
        </div>
      </button>
    </section>

    <!-- Footer -->
    <footer class="mt-16 py-8 text-gray-400 text-sm border-t border-gray-800">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">MR</div>
          <div>
            <div>Malla Reddy University</div>
            <div class="text-xs text-gray-500">Address, City — replace with actual address</div>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2 text-gray-400">✉ admissions@example.edu</div>
          <div class="flex items-center gap-2 text-gray-400">☎ +91 98765 43210</div>
        </div>
      </div>
    </footer>
  </main>

  <!-- Chat Widget -->
  <div class="fixed right-6 bottom-6 z-50">
    <button onclick="toggleChat()" class="w-14 h-14 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center text-white font-bold">Chat</button>
    <div id="chatBox" class="chat-box mt-3 w-80 max-h-[60vh] bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-xl overflow-hidden flex flex-col">
      <div class="p-3 border-b border-gray-800 flex items-center justify-between">
        <div class="text-sm font-semibold">Campus Assistant</div>
        <div class="text-xs text-gray-400">Online</div>
      </div>
      <div id="chatMessages" class="p-3 flex-1 overflow-y-auto space-y-3 text-sm"></div>
      <div class="p-3 border-t border-gray-800 flex gap-2">
        <input id="chatInput" type="text" class="flex-1 bg-transparent outline-none text-sm text-gray-100 placeholder-gray-400" placeholder="Ask about fees, courses, placements..." />
        <button onclick="sendMessage()" class="p-2 rounded-md bg-indigo-600">➤</button>
      </div>
    </div>
  </div>

  <script>
    const chatBox = document.getElementById('chatBox');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');

    function toggleChat() {
      chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
    }

    function sendMessage() {
      const text = chatInput.value.trim();
      if (!text) return;
      addMessage(text, 'user');
      chatInput.value = '';
      setTimeout(() => {
        addMessage(generateReply(text), 'bot');
      }, 800);
    }

    function addMessage(text, from) {
      const div = document.createElement('div');
      div.className = from === 'user' ? 'text-right' : 'text-left';
      div.innerHTML = `<div class="${from === 'user' ? 'inline-block bg-indigo-600/60 text-white' : 'inline-block bg-gray-800/60 text-gray-200'} rounded-lg px-3 py-2 text-sm max-w-[85%]">${text}</div>`;
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateReply(input) {
      const t = input.toLowerCase();
      if (t.includes('fee')) return 'Fee structure is listed in the Fee section above.';
      if (t.includes('placement')) return 'Placement highlights are shown in the Placements section.';
      if (t.includes('event')) return 'Check the Events section for details.';
      if (t.includes('apply') || t.includes('admission')) return 'Use the Apply Now button to start your application.';
      return 'I can answer queries on fees, courses, placements, and events.';
    }
  </script>
</body>
</html>
