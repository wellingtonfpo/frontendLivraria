import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditoraConsultarComponent } from './editora-consultar.component';
import { EditoraService } from '../service/editora.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { Editora } from '../modelo/Editora';
import { By } from '@angular/platform-browser';

describe('EditoraConsultarComponent', () => {
  let component: EditoraConsultarComponent;
  let fixture: ComponentFixture<EditoraConsultarComponent>;
  let service: EditoraService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditoraConsultarComponent],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatToolbarModule,
        MatTableModule,
      ],
    });
    fixture = TestBed.createComponent(EditoraConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(EditoraService);
    http = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });

  it('Testando exibição de editoras', () => {
    const editoras = [
      { id: 1, nome: 'Editora A', cnpj: '', desconto: 10 },
      { id: 2, nome: 'Editora B', cnpj: '', desconto: 15 },
    ];

    const spy = spyOn(service, 'listar').and.returnValue(of(editoras));

    component.listar();
    fixture.detectChanges();

    component.editoras.subscribe((editoras: Editora[]) => {
      expect(editoras.length).toEqual(2);
    });

    const table = fixture.debugElement.query(By.css('#editoras'));
    const tableRows = (table.nativeElement as HTMLTableElement).rows;

    expect(tableRows.length).toBe(3);
    expect(tableRows.item(1)?.cells.item(0)?.textContent).toContain(
      'Editora A',
    );
  });
});
