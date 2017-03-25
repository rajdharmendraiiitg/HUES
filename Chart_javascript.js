google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
      var data = google.visualization.arrayToDataTable([
        ['City', '2010 Cost', '2000 Cost'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
      ]);

      var options = {
        chart: {
          title: 'Electricity bills of a company in different cities',
          subtitle: 'Based on most recent and previous census data'
        },
        hAxis: {
          title: 'Total cost',
          minValue: 0,
        },
        vAxis: {
          title: 'City'
        },
        bars: 'horizontal'
      };
      var material = new google.charts.Bar(document.getElementById('chart_div'));
      material.draw(data, options);
    }
