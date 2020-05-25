import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
  vus: 1500,
  duration: '20s',
};

export default function() {
  http.get('http://localhost:8080/api/product/9999000');
  sleep(1);
}


