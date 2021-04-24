import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JsonPlaceholderService } from './json.placeholder.service';
import { TestBed } from '@angular/core/testing';

describe('HttpClient testing',() => {
  let httpTestingController: HttpTestingController;
  let service: JsonPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    httpTestingController = TestBed.inject(httpTestingController);
    service = TestBed.inject(JsonPlaceholderService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should get entities', done => {
    service.getTodosByUser(1)
      .subscribe(response => {
        expect(testingRequest.request.params.get('id')).toBe('1');
        expect(testingRequest.request.method).toBe('GET');
        expect(response).toEqual([1, 2]);
        done();
      });

    const testingRequest = httpTestingController.expectOne(req => req.url.includes('todos'));
    testingRequest.flush([1, 2]);
  });
})

