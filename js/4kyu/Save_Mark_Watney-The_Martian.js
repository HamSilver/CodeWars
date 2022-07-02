/*
Save Mark Watney- The Martian!

During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive. Millions of miles away, NASA and a team of international scientists work tirelessly to bring "the Martian" home, while his crewmates concurrently plot a daring, if not impossible, rescue mission. As these stories of incredible bravery unfold, the world comes together to root for Watney's safe return.

Mark faces a new problem as he tries to travel using his MAV, to potential working pathfinders, which will help him survive till ETA of the mission! He must be careful about the distance he travels else he may risk exhausting his resources far too soon. Mark has the co-ordinates of the places he needs to search. Help him find the distance when provided with lattitudes and longitudes.

You will recieve inputs in the format: "48.23° N, 89.10° E" , "48.94° N, 89.40° E". The final result must be in KM.

The radius of planet Mars is estimated to be 3,390 KM. Mark doesn't need the actual distance, he is happy with the result being precise to the lowest 10KM. For example 36.09KMshould be rounded down to 30KMas result! For simplicty use 1° = 0.0174533 radians.

Hint: Take care of the direction and you may want to use the Haversine formula ;)

Show some love; rank and upvote. Thank you Codewarrior!
*/
function saveMark(c1,c2) {
  const parseCoo = s => s.split`, `.map(e => Number(`${/[NE]$/.test(e) ? '' : '-'}${e.slice(0,-3)}`))
  const tor = n => n * Math.PI/180
  const rad = 3390  
  const [lat1,lon1] = parseCoo(c1)
  const [lat2,lon2] = parseCoo(c2)
  const dLat = tor(lat2 - lat1)
  const dLon = tor(lon2 - lon1)
  const a = Math.pow(Math.sin(dLat/2),2) + Math.cos(tor(lat1)) * Math.cos(tor(lat2)) * Math.pow(Math.sin(dLon/2),2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return `${parseInt(rad * c / 10) * 10}KM`
}
