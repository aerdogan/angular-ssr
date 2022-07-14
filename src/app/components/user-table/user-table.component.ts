import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RestApiService } from 'src/app/services/rest-api.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  Data!: User[];
  col: string[] = ['id', 'name', 'email', 'website'];
  dataSource = new MatTableDataSource<User>(this.Data);
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  constructor(private restApiService: RestApiService) {
    this.restApiService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<User>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit(): void {

  }


}
