/*
    Sample input:
        person1 
            working hours: [['9:00', '10:30'], ['12:00', '13:00'], [16:00', '18:00']]
            range of work in a day : ['9:00', '20:00'] 
        person2 
            working hours: [['10:00', '11:30'], [12:30', '14:30'], ['14:30', '15:00'], [16:00', '17:00’]]
            range of work in a day: ['10:00', '18:30']
        
        meeting duration : 30

    Sample output:
        [['11:30', '12:00'], [15:00', '16:00'], [18:00', '18:30']]

*/

const timeline_1 = [['9.00 - 10.30'], ['12.00 - 13.00'], ['16.00 - 18.00']];
const timeline_2 = [['10.00 - 11.30'], ['12.30 - 14.30'], ['14.30 - 15.00'], ['16.00 - 17.00']];

// Array of time where all people are busy
const multiverse = [timeline_1 , timeline_2];

// pass the array time to the function && store the data back to result
const result = freeTime(multiverse);

function freeTime(multiverse){
    const allTime = allPossibleTime();
    let tempResult = [];
    for (const person of multiverse) {
        for (const time of person) {
          for (
            let i = Number(time.split('-')[0]);
            i < Number(time.split('-')[1]);
            i++
          ) {
            const val = `${i}-${i + 1}`;
            if (!tempResult.includes(val)) {
              tempResult.push(val);
            }
          }
        }
    }
    // merge  times 
    return mergeTime(
    allTime.filter((time) => !tempResult.includes(time))
    );
}

function mergeTime(timeArray){
    const result = [];
    let i = 0;
    while (i < timeArray.length) {
        const arr = timeArray[i].split('-');
        let start = Number(arr[0]);
        let end = Number(arr[1]);
        let counter = 0;
        for (let j = i + 1; j < timeArray.length; j++) {
            const jarr = timeArray[j].split('-');
            const jstart = Number(jarr[0]);
            const jend = Number(jarr[1]);

            if (end == jstart || end >= jstart) {
                end = jend;
                counter++;
            }
        }

        i = counter === 0 ? ++i : i + counter + 1;
        result.push(`${start}-${end}`);
    }
    return result;
}


// range of work =  ['10:00', '18:30'] , metting = 0.30
function allPossibleTime(){
    const result = [];
    for (let i = 10.00 ; i < 18.30 ; i = i + 0.30) {
      result.push(`${i}-${i + 0.30}`);
    }
    return result;
  }

  console.log(result);