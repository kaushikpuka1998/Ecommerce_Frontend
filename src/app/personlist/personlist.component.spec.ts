import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

import { PersonlistComponent } from './personlist.component';

describe('PersonlistComponent', () => {
  let component: PersonlistComponent;
  let fixture: ComponentFixture<PersonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonlistComponent, AppComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonlistComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('testing html table data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    // expect(compiled.querySelector('td')?.textContent).toContain('kaushikghoshgmail.com');

    expect(tableRows.length).toBe(5);

    let headerRow = tableRows[0];
    expect(headerRow.cells[1].innerHTML).toBe('Last Name');


  });

  it('testing html second table data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    // expect(compiled.querySelector('td')?.textContent).toContain('kaushikghoshgmail.com');

    expect(tableRows.length).toBe(5);

    let headerRow = tableRows[1];
    expect(headerRow.cells[3].innerHTML).toBe('₹67,500.00');


  });

  it('testing html data table check', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    // expect(compiled.querySelector('td')?.textContent).toContain('kaushikghoshgmail.com');

    expect(tableRows.length).toBe(5);

    let headerRow = tableRows[2];
    expect(headerRow.cells[3].innerHTML).toBe('₹97,500.00');


  });
});


