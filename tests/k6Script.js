import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
  vus: 700,
  duration: '180s',
};

export default function() {
  http.get('http://localhost:8080');
  sleep(0.5);
}


