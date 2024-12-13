// Navigation function
function navigate(page) {
    window.location.href = page;
}

// Line Chart (Revenue Trend)
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue ($)',
            data: [300, 400, 600, 700, 500, 800],
            borderColor: '#1f6efc',
            backgroundColor: 'rgba(31, 110, 252, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
    },
});

// Pie Chart (Project Distribution)
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Project A', 'Project B', 'Project C', 'Project D'],
        datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: ['#1f6efc', '#28a745', '#ffc107', '#dc3545'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    },
});

// Bar Chart (Quarterly Performance)
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Performance',
            data: [75, 90, 80, 95],
            backgroundColor: ['#1f6efc', '#28a745', '#ffc107', '#dc3545'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
});


