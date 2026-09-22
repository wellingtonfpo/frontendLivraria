/// <reference types="jasmine" />

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { EditoraService } from './editora.service';
import { of } from 'rxjs';

describe('EditoraService', () => {
  let service: EditoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
