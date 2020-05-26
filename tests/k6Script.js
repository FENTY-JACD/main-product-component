import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
  vus: 500,
  duration: '20s',
};

export default function() {
  http.get('http://localhost:8080/api/product/9999900');
  sleep(1);
}


