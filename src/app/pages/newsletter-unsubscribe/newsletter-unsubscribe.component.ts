import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-newsletter-unsubscribe',
  templateUrl: './newsletter-unsubscribe.component.html',
  styleUrls: ['./newsletter-unsubscribe.component.scss'],
})
export class NewsletterUnsubscribeComponent implements OnInit {
  unsubscribed: boolean;
  error: boolean;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const uuid = this.route.snapshot.queryParamMap.get('uuid');
    this.unsubscribe(uuid);
  }

  unsubscribe(uuid: string) {
    this.http
      .put(`${environment.api}/unsubscribe`, { uuid })
      .pipe(first())
      .subscribe(
        () => {},
        (error) => {
          this.error = true;
        },
        () => {
          this.unsubscribed = true;
        }
      );
  }
}
