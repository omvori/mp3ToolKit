import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllerDevices } from './controller-devices';

describe('ControllerDevices', () => {
  let component: ControllerDevices;
  let fixture: ComponentFixture<ControllerDevices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllerDevices],
    }).compileComponents();

    fixture = TestBed.createComponent(ControllerDevices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
