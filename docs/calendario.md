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
          title: 'AZ Quest Investimentos',
          start: '2023-07-11'
        },
        {
          title: 'Dahlia Capital',
          start: '2023-07-08'
        },
        {
          title: 'Daycoval Asset Management',
          start: '2023-07-14',
        },
	{
          title: 'Genoa Capital',
          start: '2023-07-08'
        },
        {
          title: 'JGP Asset Management',
          start: '2023-07-10'
        },
        {
          title: 'MAG Investimentos',
          start: '2023-07-07',
        },
	{
          title: 'O3 Capital',
          start: '2023-07-08'
        },
        {
          title: 'Rio Bravo',
          start: '2023-07-07'
        },
        {
          title: 'Sueste Capital',
          start: '2023-07-12',
        },
	{
          title: 'SulAmerica Investimentos',
          start: '2023-07-10'
        },
        {
          title: 'V8 Capital',
          start: '2023-07-14'
        },
        {
          title: 'Valora Investimentos',
          start: '2023-07-14',
        },
	{
          title: 'Verde Asset Management',
          start: '2023-07-10'
        },
        {
          title: 'BV Asset',
          start: '2023-07-08'
        },
        {
          title: 'XP Asset Management',
          start: '2023-07-11',
        },
      ]
    });

    calendar.render();
  });

</script>

<div id="calendar"></div>
