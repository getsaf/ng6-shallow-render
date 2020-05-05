import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Shallow } from 'shallow-render';
import {AppModule} from 'src/app/app.module';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;
  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it('renders the title', async () => {
    const {find} = await shallow.render();
    expect(find('h1').nativeElement.textContent)
      .toContain('Welcome to ng6-shallow-render');
  });
});
