/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';
import { EditoraService } from './editora.service';

describe('EditoraService', () => {
  let service: EditoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
