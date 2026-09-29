import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditoraConsultarComponent } from './editora-consultar.component';

describe('EditoraConsultarComponent', () => {
  let component: EditoraConsultarComponent;
  let fixture: ComponentFixture<EditoraConsultarComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [EditoraConsultarComponent],
    });

    fixture = TestBed.createComponent(EditoraConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
