import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBreedResultsComponent } from './dog-breed-results.component';

describe('DogBreedResultsComponent', () => {
  let component: DogBreedResultsComponent;
  let fixture: ComponentFixture<DogBreedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogBreedResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogBreedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
