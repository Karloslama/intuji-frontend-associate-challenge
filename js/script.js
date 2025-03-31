// Interactive functionality
document.addEventListener("DOMContentLoaded", function () {
  // Navigation menu interaction
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // See All transactions
  const seeAllBtn = document.querySelector(".see-all");
  seeAllBtn.addEventListener("click", function () {
    alert("Showing all transactions...");
  });

  // Logout button functionality
  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to logout?")) {
        // In a real app, redirect to logout endpoint
        // window.location.href = '/logout';
        alert("Logged Out");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".sidebar-toggle");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("expanded");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 992 &&
      !sidebar.contains(e.target) &&
      e.target !== toggleBtn
    ) {
      sidebar.classList.remove("expanded");
    }
  });
});


// Chart configuration
const chartConfig = {
  week: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    data1: [18000, 15000, 19500, 12000, 17000, 9000, 13000],
    data2: [2000, 3000, 500, 3000, 1000, 6000, 2000],
  },
  month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data1: [15000, 17000, 19000, 21000],
    data2: [3000, 4000, 2000, 5000],
  },
  year: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    data1: [
      15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 21000, 20000,
      19000, 18000,
    ],
    data2: [
      3000, 3500, 4000, 4500, 5000, 5500, 6000, 5500, 5000, 4500, 4000, 3500,
    ],
  },
};

// Initialize chart
const ctx = document.getElementById("analyticsChart").getContext("2d");
let analyticsChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: chartConfig.week.labels,
    datasets: [
      {
        label: "Label1",
        data: chartConfig.week.data1,
        borderColor: "#4361ee",
        backgroundColor: "rgba(67, 97, 238, 0.1)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
      {
        label: "Label1",
        data: chartConfig.week.data2,
        borderColor: "#4cc9f0",
        backgroundColor: "rgba(76, 201, 240, 0.1)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return value / 1000 + "k";
          },
          stepSize: 5000,
        },
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": $" + context.raw.toLocaleString();
          },
        },
      },
    },
  },
});

// Period dropdown functionality
document.getElementById("periodSelect").addEventListener("change", function () {
  const period = this.value;

  // Update chart data
  analyticsChart.data.labels = chartConfig[period].labels;
  analyticsChart.data.datasets[0].data = chartConfig[period].data1;
  analyticsChart.data.datasets[1].data = chartConfig[period].data2;
  analyticsChart.update();
});

document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtns = document.querySelectorAll('.sidebar-toggle');

  toggleBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          sidebar.classList.toggle('expanded');
          sidebar.classList.toggle('closed');
      });
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(e) {
      if (window.innerWidth <= 992 && !sidebar.contains(e.target) && !e.target.classList.contains('sidebar-toggle')) {
          sidebar.classList.remove('expanded');
          sidebar.classList.add('closed');
      }
  });
});
