---
layout: page
title: Calendário
permalink: /calendario/
---

<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js'></script>
<script>

  document.addEventListener('DOMContentLoaded', function() {
    let currentView = 'customList';
    let calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'customButton'
      },
      initialView: currentView,
      views: {
        customList: {
          type: 'listWeek',
          buttonText: 'Lista de releases',
          duration: { months: 6 },
        },
        customMonth: {
          type: 'dayGridMonth',
          buttonText: 'Releases do mês',
        }
      },
      customButtons: {
        customButton: {
          text: 'Trocar modo',
          click: function() {
            if (currentView === 'customList') {
              currentView = 'customMonth';
            } else {
              currentView = 'customList';
            }
            calendar.changeView(currentView);
          }
        }
      },
      events: [
        {
          title: 'Empresa XYZ',
          start: '2023-07-10'
        },
        {
          title: 'Empresa ABC',
          start: '2023-07-20'
        },
        {
          title: 'Empresa XPTO',
          start: '2023-07-25',
        },
      ]
    });

    calendar.render();
  });

</script>

<div id="calendar"></div>
