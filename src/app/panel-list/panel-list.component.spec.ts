import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelListComponent } from './panel-list.component';

describe('PanelListComponent', () => {
  let component: PanelListComponent;
  let fixture: ComponentFixture<PanelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelListComponent]
    });
    fixture = TestBed.createComponent(PanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
