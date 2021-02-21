import { Component, OnInit, ViewChild } from '@angular/core';

import { ThemeService } from '@services/theme.service';
import { tap } from 'rxjs/operators';
import { shortcut } from '@utils/shortcuts';
import { KeyCode } from '@utils/keycodes';
import { merge, Observable } from 'rxjs';
import { ScullyContentService } from '@services/scully-content.service';
import { ScullyRoute } from '@scullyio/ng-lib';
import { NewsletterSignupComponent } from '@components/newsletter-signup/newsletter-signup.component';
import { NizSearch } from '@components/search/search.component';
import { FooterSection } from '@components/footer/footer.component';
import { SimpleAnalyticsService } from '@services/simple-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('newsletter', { read: NewsletterSignupComponent })
  newsletter: NewsletterSignupComponent;

  copyrightUrl = 'legal/privacy-policy';
  current$: Observable<ScullyRoute>;
  createdWithSvgSources = [
    'assets/stack/angular.svg',
    'assets/stack/scully.svg',
    'assets/stack/tailwind-css.svg',
    'assets/stack/firebase.svg',
  ];

  footerSections: FooterSection[] = [
    {
      title: 'Lainnya',
      links: [
        {
          title: 'Tutorial',
          url: '/tutorial/',
          svg: 'assets/img/blog-white.svg',
        },
        {
          title: 'Penulis',
          url: '/authors/',
          svg: 'assets/img/author.svg',
        },
        {
          title: 'Tags',
          url: '/tags/',
          svg: 'assets/img/tags-white.svg',
        }
      ],
    },
    {
      title: 'Kontak',
      links: [
        {
          title: 'Twitter',
          url: 'https://twitter.com/mirzailhami',
          svg: 'assets/img/twitter-white.svg',
          external: true,
        },
        {
          title: 'Github',
          url: 'https://github.com/mirzailhami',
          svg: 'assets/img/github-white.svg',
          external: true,
        },
        {
          title: 'Email',
          url: 'mailto:me@mirzailhami.com',
          svg: 'assets/img/mail.svg',
          external: true,
        },
      ],
    }
  ];

  constructor(
    public themeService: ThemeService,
    private content: ScullyContentService,
    private sa: SimpleAnalyticsService
  ) {}

  ngOnInit() {

    this.themeService.initTheme();

    merge(
      shortcut([KeyCode.ControlLeft, KeyCode.KeyT]),
      shortcut([KeyCode.ControlRight, KeyCode.KeyT])
    )
      .pipe(
        tap(() => {
          this.sa.event(
            `theme_toggle_shortcut_from_${this.themeService.theme}_to_${
              this.themeService.theme === 'dark' ? 'light' : 'dark'
            }`
          );
        }),
        tap(() => this.toggleTheme())
      )
      .subscribe();

    this.current$ = this.content.getCurrent();
  }

  scrollToNewsletter() {
    this.newsletter.focus();
    this.sa.event('newsletter_focus_click');
  }

  openSearch(search: NizSearch) {
    search.openSearch();
    this.sa.event('search_open_click');
  }

  toggleTheme() {
    this.sa.event(
      `theme_toggle_click_from_${this.themeService.theme}_to_${
        this.themeService.theme === 'dark' ? 'light' : 'dark'
      }`
    );
    this.themeService.toggleTheme();
  }
}
