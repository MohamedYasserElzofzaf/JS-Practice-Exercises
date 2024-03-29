function getStartTime(schedules, duration) {
    var overlapRanges = getOverlaps(schedules);
    var available = overlapRanges.find(range => rangeToMinutes(range) >= duration);
    
    return available && available[0] || null;
  }
  
  /**
   * Given a time range in format ['09:15', '10:30'],
   * return the length of the range in minutes.
   */
  function rangeToMinutes(range) {
    var minutes = 0;
    var start = range[0];
    var end = range[1];
    var startParts = start.split(':');
    var endParts = end.split(':');
    var startHour = +startParts[0];
    var endHour = +endParts[0];
    var startMins = +startParts[1];
    var endMins = +endParts[1];
    
    if (startHour !== endHour) {
      var hrMins = (endHour - startHour) * 60;
      minutes += hrMins;
    }
  
    if (startMins !== endMins) {
      minutes += (endMins - startMins)
    }
  
    return minutes;
  }
  
  /**
   * Given a set of schedules of busy time ranges, return 
   * the time range of availabilities common to all schedules..
   */
  function getOverlaps(schedules) {
    var res = [];
    
    return schedules.reduce((openSlots, schedule) => {
      var open = getOpenSlots(schedule);
  
      return intersectSchedules(openSlots, open);
    }, [['09:00', '20:00']]);
    
  }
  
  /**
   * Given 2 sets of available times, return the times available in both schedules.
   */
  function intersectSchedules(schedule1, schedule2) {
    var res = [];
  
    schedule1.forEach(r1 => {
      schedule2.forEach(r2 => {
        var intersection = findIntersection(r1, r2);
  
        if (intersection) {
          res.push(intersection);
        }
      });
    });
  
    return res;
  }
  
  /**
   * Given 2 ranges
   */
  function findIntersection(a, b) {
    var min = (a[0] < b[0]) ? a : b;
    var max = (min === a) ? b : a;
  
    if (min[1] < max[0]) return null;
  
    return [max[0], (min[1] < max[1]) ? min[1] : max[1]];
  }
  
  /**
   * Given a schedule of meetings, find the oen slots.
 */
  function getOpenSlots(schedule) {
    var res = [];
    var head = schedule[0] && schedule[0][0];
    var tail = schedule[schedule.length - 1] &&schedule[schedule.length - 1][1];
    
    if (schedule.length <= 1) {
      return schedule;
    }
    
    // first slot
    if (head !== '09:00') {
      res.push(['09:00', head]);
    }
    
    schedule.forEach((curr, i) => {
      var prev = schedule[i - 1];
      var isTimeBetween = prev && prev[1] !== curr[0];
  
      if (i > 0 && isTimeBetween) {
       res.push([prev[1], curr[0]]);
      }
    });
    
    // last slot
    if (tail !== '19:00') {
      res.push([tail, '19:00']);
    }
    
    return res;
  }