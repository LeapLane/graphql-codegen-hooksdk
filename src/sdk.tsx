import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IInt_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Project" */
export type IProject = {
  __typename?: 'Project';
  /** An array relationship */
  Tasks: Array<ITask>;
  /** An aggregated array relationship */
  Tasks_aggregate: ITask_Aggregate;
  /** An object relationship */
  User: IUser;
  id: Scalars['Int'];
  name: Scalars['String'];
  user_id: Scalars['Int'];
};


/** columns and relationships of "Project" */
export type IProjectTasksArgs = {
  distinct_on?: Maybe<Array<ITask_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITask_Order_By>>;
  where?: Maybe<ITask_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type IProjectTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<ITask_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITask_Order_By>>;
  where?: Maybe<ITask_Bool_Exp>;
};

/** aggregated selection of "Project" */
export type IProject_Aggregate = {
  __typename?: 'Project_aggregate';
  aggregate?: Maybe<IProject_Aggregate_Fields>;
  nodes: Array<IProject>;
};

/** aggregate fields of "Project" */
export type IProject_Aggregate_Fields = {
  __typename?: 'Project_aggregate_fields';
  avg?: Maybe<IProject_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IProject_Max_Fields>;
  min?: Maybe<IProject_Min_Fields>;
  stddev?: Maybe<IProject_Stddev_Fields>;
  stddev_pop?: Maybe<IProject_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<IProject_Stddev_Samp_Fields>;
  sum?: Maybe<IProject_Sum_Fields>;
  var_pop?: Maybe<IProject_Var_Pop_Fields>;
  var_samp?: Maybe<IProject_Var_Samp_Fields>;
  variance?: Maybe<IProject_Variance_Fields>;
};


/** aggregate fields of "Project" */
export type IProject_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<IProject_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Project" */
export type IProject_Aggregate_Order_By = {
  avg?: Maybe<IProject_Avg_Order_By>;
  count?: Maybe<IOrder_By>;
  max?: Maybe<IProject_Max_Order_By>;
  min?: Maybe<IProject_Min_Order_By>;
  stddev?: Maybe<IProject_Stddev_Order_By>;
  stddev_pop?: Maybe<IProject_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<IProject_Stddev_Samp_Order_By>;
  sum?: Maybe<IProject_Sum_Order_By>;
  var_pop?: Maybe<IProject_Var_Pop_Order_By>;
  var_samp?: Maybe<IProject_Var_Samp_Order_By>;
  variance?: Maybe<IProject_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Project" */
export type IProject_Arr_Rel_Insert_Input = {
  data: Array<IProject_Insert_Input>;
  on_conflict?: Maybe<IProject_On_Conflict>;
};

/** aggregate avg on columns */
export type IProject_Avg_Fields = {
  __typename?: 'Project_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Project" */
export type IProject_Avg_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type IProject_Bool_Exp = {
  Tasks?: Maybe<ITask_Bool_Exp>;
  User?: Maybe<IUser_Bool_Exp>;
  _and?: Maybe<Array<Maybe<IProject_Bool_Exp>>>;
  _not?: Maybe<IProject_Bool_Exp>;
  _or?: Maybe<Array<Maybe<IProject_Bool_Exp>>>;
  id?: Maybe<IInt_Comparison_Exp>;
  name?: Maybe<IString_Comparison_Exp>;
  user_id?: Maybe<IInt_Comparison_Exp>;
};

/** unique or primary key constraints on table "Project" */
export enum IProject_Constraint {
  /** unique or primary key constraint */
  ProjectPkey = 'Project_pkey'
}

/** input type for incrementing integer column in table "Project" */
export type IProject_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Project" */
export type IProject_Insert_Input = {
  Tasks?: Maybe<ITask_Arr_Rel_Insert_Input>;
  User?: Maybe<IUser_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type IProject_Max_Fields = {
  __typename?: 'Project_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Project" */
export type IProject_Max_Order_By = {
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** aggregate min on columns */
export type IProject_Min_Fields = {
  __typename?: 'Project_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Project" */
export type IProject_Min_Order_By = {
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** response of any mutation on the table "Project" */
export type IProject_Mutation_Response = {
  __typename?: 'Project_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<IProject>;
};

/** input type for inserting object relation for remote table "Project" */
export type IProject_Obj_Rel_Insert_Input = {
  data: IProject_Insert_Input;
  on_conflict?: Maybe<IProject_On_Conflict>;
};

/** on conflict condition type for table "Project" */
export type IProject_On_Conflict = {
  constraint: IProject_Constraint;
  update_columns: Array<IProject_Update_Column>;
  where?: Maybe<IProject_Bool_Exp>;
};

/** ordering options when selecting data from "Project" */
export type IProject_Order_By = {
  Tasks_aggregate?: Maybe<ITask_Aggregate_Order_By>;
  User?: Maybe<IUser_Order_By>;
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** primary key columns input for table: "Project" */
export type IProject_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Project" */
export enum IProject_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Project" */
export type IProject_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type IProject_Stddev_Fields = {
  __typename?: 'Project_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Project" */
export type IProject_Stddev_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** aggregate stddev_pop on columns */
export type IProject_Stddev_Pop_Fields = {
  __typename?: 'Project_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Project" */
export type IProject_Stddev_Pop_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** aggregate stddev_samp on columns */
export type IProject_Stddev_Samp_Fields = {
  __typename?: 'Project_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Project" */
export type IProject_Stddev_Samp_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** aggregate sum on columns */
export type IProject_Sum_Fields = {
  __typename?: 'Project_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Project" */
export type IProject_Sum_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** update columns of table "Project" */
export enum IProject_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type IProject_Var_Pop_Fields = {
  __typename?: 'Project_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Project" */
export type IProject_Var_Pop_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** aggregate var_samp on columns */
export type IProject_Var_Samp_Fields = {
  __typename?: 'Project_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Project" */
export type IProject_Var_Samp_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** aggregate variance on columns */
export type IProject_Variance_Fields = {
  __typename?: 'Project_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Project" */
export type IProject_Variance_Order_By = {
  id?: Maybe<IOrder_By>;
  user_id?: Maybe<IOrder_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type IString_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "Task" */
export type ITask = {
  __typename?: 'Task';
  /** An object relationship */
  Project: IProject;
  id: Scalars['Int'];
  name: Scalars['String'];
  project_id: Scalars['Int'];
};

/** aggregated selection of "Task" */
export type ITask_Aggregate = {
  __typename?: 'Task_aggregate';
  aggregate?: Maybe<ITask_Aggregate_Fields>;
  nodes: Array<ITask>;
};

/** aggregate fields of "Task" */
export type ITask_Aggregate_Fields = {
  __typename?: 'Task_aggregate_fields';
  avg?: Maybe<ITask_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ITask_Max_Fields>;
  min?: Maybe<ITask_Min_Fields>;
  stddev?: Maybe<ITask_Stddev_Fields>;
  stddev_pop?: Maybe<ITask_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ITask_Stddev_Samp_Fields>;
  sum?: Maybe<ITask_Sum_Fields>;
  var_pop?: Maybe<ITask_Var_Pop_Fields>;
  var_samp?: Maybe<ITask_Var_Samp_Fields>;
  variance?: Maybe<ITask_Variance_Fields>;
};


/** aggregate fields of "Task" */
export type ITask_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ITask_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Task" */
export type ITask_Aggregate_Order_By = {
  avg?: Maybe<ITask_Avg_Order_By>;
  count?: Maybe<IOrder_By>;
  max?: Maybe<ITask_Max_Order_By>;
  min?: Maybe<ITask_Min_Order_By>;
  stddev?: Maybe<ITask_Stddev_Order_By>;
  stddev_pop?: Maybe<ITask_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ITask_Stddev_Samp_Order_By>;
  sum?: Maybe<ITask_Sum_Order_By>;
  var_pop?: Maybe<ITask_Var_Pop_Order_By>;
  var_samp?: Maybe<ITask_Var_Samp_Order_By>;
  variance?: Maybe<ITask_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Task" */
export type ITask_Arr_Rel_Insert_Input = {
  data: Array<ITask_Insert_Input>;
  on_conflict?: Maybe<ITask_On_Conflict>;
};

/** aggregate avg on columns */
export type ITask_Avg_Fields = {
  __typename?: 'Task_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Task" */
export type ITask_Avg_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "Task". All fields are combined with a logical 'AND'. */
export type ITask_Bool_Exp = {
  Project?: Maybe<IProject_Bool_Exp>;
  _and?: Maybe<Array<Maybe<ITask_Bool_Exp>>>;
  _not?: Maybe<ITask_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ITask_Bool_Exp>>>;
  id?: Maybe<IInt_Comparison_Exp>;
  name?: Maybe<IString_Comparison_Exp>;
  project_id?: Maybe<IInt_Comparison_Exp>;
};

/** unique or primary key constraints on table "Task" */
export enum ITask_Constraint {
  /** unique or primary key constraint */
  TaskPkey = 'Task_pkey'
}

/** input type for incrementing integer column in table "Task" */
export type ITask_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Task" */
export type ITask_Insert_Input = {
  Project?: Maybe<IProject_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type ITask_Max_Fields = {
  __typename?: 'Task_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Task" */
export type ITask_Max_Order_By = {
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** aggregate min on columns */
export type ITask_Min_Fields = {
  __typename?: 'Task_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Task" */
export type ITask_Min_Order_By = {
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** response of any mutation on the table "Task" */
export type ITask_Mutation_Response = {
  __typename?: 'Task_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ITask>;
};

/** input type for inserting object relation for remote table "Task" */
export type ITask_Obj_Rel_Insert_Input = {
  data: ITask_Insert_Input;
  on_conflict?: Maybe<ITask_On_Conflict>;
};

/** on conflict condition type for table "Task" */
export type ITask_On_Conflict = {
  constraint: ITask_Constraint;
  update_columns: Array<ITask_Update_Column>;
  where?: Maybe<ITask_Bool_Exp>;
};

/** ordering options when selecting data from "Task" */
export type ITask_Order_By = {
  Project?: Maybe<IProject_Order_By>;
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** primary key columns input for table: "Task" */
export type ITask_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Task" */
export enum ITask_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for updating data in table "Task" */
export type ITask_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type ITask_Stddev_Fields = {
  __typename?: 'Task_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Task" */
export type ITask_Stddev_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** aggregate stddev_pop on columns */
export type ITask_Stddev_Pop_Fields = {
  __typename?: 'Task_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Task" */
export type ITask_Stddev_Pop_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** aggregate stddev_samp on columns */
export type ITask_Stddev_Samp_Fields = {
  __typename?: 'Task_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Task" */
export type ITask_Stddev_Samp_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** aggregate sum on columns */
export type ITask_Sum_Fields = {
  __typename?: 'Task_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Task" */
export type ITask_Sum_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** update columns of table "Task" */
export enum ITask_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id'
}

/** aggregate var_pop on columns */
export type ITask_Var_Pop_Fields = {
  __typename?: 'Task_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Task" */
export type ITask_Var_Pop_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** aggregate var_samp on columns */
export type ITask_Var_Samp_Fields = {
  __typename?: 'Task_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Task" */
export type ITask_Var_Samp_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** aggregate variance on columns */
export type ITask_Variance_Fields = {
  __typename?: 'Task_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Task" */
export type ITask_Variance_Order_By = {
  id?: Maybe<IOrder_By>;
  project_id?: Maybe<IOrder_By>;
};

/** columns and relationships of "User" */
export type IUser = {
  __typename?: 'User';
  /** An array relationship */
  Projects: Array<IProject>;
  /** An aggregated array relationship */
  Projects_aggregate: IProject_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "User" */
export type IUserProjectsArgs = {
  distinct_on?: Maybe<Array<IProject_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IProject_Order_By>>;
  where?: Maybe<IProject_Bool_Exp>;
};


/** columns and relationships of "User" */
export type IUserProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<IProject_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IProject_Order_By>>;
  where?: Maybe<IProject_Bool_Exp>;
};

/** aggregated selection of "User" */
export type IUser_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<IUser_Aggregate_Fields>;
  nodes: Array<IUser>;
};

/** aggregate fields of "User" */
export type IUser_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<IUser_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IUser_Max_Fields>;
  min?: Maybe<IUser_Min_Fields>;
  stddev?: Maybe<IUser_Stddev_Fields>;
  stddev_pop?: Maybe<IUser_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<IUser_Stddev_Samp_Fields>;
  sum?: Maybe<IUser_Sum_Fields>;
  var_pop?: Maybe<IUser_Var_Pop_Fields>;
  var_samp?: Maybe<IUser_Var_Samp_Fields>;
  variance?: Maybe<IUser_Variance_Fields>;
};


/** aggregate fields of "User" */
export type IUser_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<IUser_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type IUser_Aggregate_Order_By = {
  avg?: Maybe<IUser_Avg_Order_By>;
  count?: Maybe<IOrder_By>;
  max?: Maybe<IUser_Max_Order_By>;
  min?: Maybe<IUser_Min_Order_By>;
  stddev?: Maybe<IUser_Stddev_Order_By>;
  stddev_pop?: Maybe<IUser_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<IUser_Stddev_Samp_Order_By>;
  sum?: Maybe<IUser_Sum_Order_By>;
  var_pop?: Maybe<IUser_Var_Pop_Order_By>;
  var_samp?: Maybe<IUser_Var_Samp_Order_By>;
  variance?: Maybe<IUser_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type IUser_Arr_Rel_Insert_Input = {
  data: Array<IUser_Insert_Input>;
  on_conflict?: Maybe<IUser_On_Conflict>;
};

/** aggregate avg on columns */
export type IUser_Avg_Fields = {
  __typename?: 'User_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "User" */
export type IUser_Avg_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type IUser_Bool_Exp = {
  Projects?: Maybe<IProject_Bool_Exp>;
  _and?: Maybe<Array<Maybe<IUser_Bool_Exp>>>;
  _not?: Maybe<IUser_Bool_Exp>;
  _or?: Maybe<Array<Maybe<IUser_Bool_Exp>>>;
  id?: Maybe<IInt_Comparison_Exp>;
  name?: Maybe<IString_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum IUser_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'User_pkey'
}

/** input type for incrementing integer column in table "User" */
export type IUser_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type IUser_Insert_Input = {
  Projects?: Maybe<IProject_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type IUser_Max_Fields = {
  __typename?: 'User_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "User" */
export type IUser_Max_Order_By = {
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
};

/** aggregate min on columns */
export type IUser_Min_Fields = {
  __typename?: 'User_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "User" */
export type IUser_Min_Order_By = {
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
};

/** response of any mutation on the table "User" */
export type IUser_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<IUser>;
};

/** input type for inserting object relation for remote table "User" */
export type IUser_Obj_Rel_Insert_Input = {
  data: IUser_Insert_Input;
  on_conflict?: Maybe<IUser_On_Conflict>;
};

/** on conflict condition type for table "User" */
export type IUser_On_Conflict = {
  constraint: IUser_Constraint;
  update_columns: Array<IUser_Update_Column>;
  where?: Maybe<IUser_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type IUser_Order_By = {
  Projects_aggregate?: Maybe<IProject_Aggregate_Order_By>;
  id?: Maybe<IOrder_By>;
  name?: Maybe<IOrder_By>;
};

/** primary key columns input for table: "User" */
export type IUser_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "User" */
export enum IUser_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "User" */
export type IUser_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type IUser_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "User" */
export type IUser_Stddev_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** aggregate stddev_pop on columns */
export type IUser_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "User" */
export type IUser_Stddev_Pop_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** aggregate stddev_samp on columns */
export type IUser_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "User" */
export type IUser_Stddev_Samp_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** aggregate sum on columns */
export type IUser_Sum_Fields = {
  __typename?: 'User_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "User" */
export type IUser_Sum_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** update columns of table "User" */
export enum IUser_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type IUser_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "User" */
export type IUser_Var_Pop_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** aggregate var_samp on columns */
export type IUser_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "User" */
export type IUser_Var_Samp_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** aggregate variance on columns */
export type IUser_Variance_Fields = {
  __typename?: 'User_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "User" */
export type IUser_Variance_Order_By = {
  id?: Maybe<IOrder_By>;
};

/** mutation root */
export type IMutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Project" */
  delete_Project?: Maybe<IProject_Mutation_Response>;
  /** delete single row from the table: "Project" */
  delete_Project_by_pk?: Maybe<IProject>;
  /** delete data from the table: "Task" */
  delete_Task?: Maybe<ITask_Mutation_Response>;
  /** delete single row from the table: "Task" */
  delete_Task_by_pk?: Maybe<ITask>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<IUser_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<IUser>;
  /** insert data into the table: "Project" */
  insert_Project?: Maybe<IProject_Mutation_Response>;
  /** insert a single row into the table: "Project" */
  insert_Project_one?: Maybe<IProject>;
  /** insert data into the table: "Task" */
  insert_Task?: Maybe<ITask_Mutation_Response>;
  /** insert a single row into the table: "Task" */
  insert_Task_one?: Maybe<ITask>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<IUser_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<IUser>;
  /** update data of the table: "Project" */
  update_Project?: Maybe<IProject_Mutation_Response>;
  /** update single row of the table: "Project" */
  update_Project_by_pk?: Maybe<IProject>;
  /** update data of the table: "Task" */
  update_Task?: Maybe<ITask_Mutation_Response>;
  /** update single row of the table: "Task" */
  update_Task_by_pk?: Maybe<ITask>;
  /** update data of the table: "User" */
  update_User?: Maybe<IUser_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<IUser>;
};


/** mutation root */
export type IMutation_RootDelete_ProjectArgs = {
  where: IProject_Bool_Exp;
};


/** mutation root */
export type IMutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type IMutation_RootDelete_TaskArgs = {
  where: ITask_Bool_Exp;
};


/** mutation root */
export type IMutation_RootDelete_Task_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type IMutation_RootDelete_UserArgs = {
  where: IUser_Bool_Exp;
};


/** mutation root */
export type IMutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type IMutation_RootInsert_ProjectArgs = {
  objects: Array<IProject_Insert_Input>;
  on_conflict?: Maybe<IProject_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_Project_OneArgs = {
  object: IProject_Insert_Input;
  on_conflict?: Maybe<IProject_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_TaskArgs = {
  objects: Array<ITask_Insert_Input>;
  on_conflict?: Maybe<ITask_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_Task_OneArgs = {
  object: ITask_Insert_Input;
  on_conflict?: Maybe<ITask_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_UserArgs = {
  objects: Array<IUser_Insert_Input>;
  on_conflict?: Maybe<IUser_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_User_OneArgs = {
  object: IUser_Insert_Input;
  on_conflict?: Maybe<IUser_On_Conflict>;
};


/** mutation root */
export type IMutation_RootUpdate_ProjectArgs = {
  _inc?: Maybe<IProject_Inc_Input>;
  _set?: Maybe<IProject_Set_Input>;
  where: IProject_Bool_Exp;
};


/** mutation root */
export type IMutation_RootUpdate_Project_By_PkArgs = {
  _inc?: Maybe<IProject_Inc_Input>;
  _set?: Maybe<IProject_Set_Input>;
  pk_columns: IProject_Pk_Columns_Input;
};


/** mutation root */
export type IMutation_RootUpdate_TaskArgs = {
  _inc?: Maybe<ITask_Inc_Input>;
  _set?: Maybe<ITask_Set_Input>;
  where: ITask_Bool_Exp;
};


/** mutation root */
export type IMutation_RootUpdate_Task_By_PkArgs = {
  _inc?: Maybe<ITask_Inc_Input>;
  _set?: Maybe<ITask_Set_Input>;
  pk_columns: ITask_Pk_Columns_Input;
};


/** mutation root */
export type IMutation_RootUpdate_UserArgs = {
  _inc?: Maybe<IUser_Inc_Input>;
  _set?: Maybe<IUser_Set_Input>;
  where: IUser_Bool_Exp;
};


/** mutation root */
export type IMutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<IUser_Inc_Input>;
  _set?: Maybe<IUser_Set_Input>;
  pk_columns: IUser_Pk_Columns_Input;
};

/** column ordering options */
export enum IOrder_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type IQuery_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Project" */
  Project: Array<IProject>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: IProject_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<IProject>;
  /** fetch data from the table: "Task" */
  Task: Array<ITask>;
  /** fetch aggregated fields from the table: "Task" */
  Task_aggregate: ITask_Aggregate;
  /** fetch data from the table: "Task" using primary key columns */
  Task_by_pk?: Maybe<ITask>;
  /** fetch data from the table: "User" */
  User: Array<IUser>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: IUser_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<IUser>;
};


/** query root */
export type IQuery_RootProjectArgs = {
  distinct_on?: Maybe<Array<IProject_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IProject_Order_By>>;
  where?: Maybe<IProject_Bool_Exp>;
};


/** query root */
export type IQuery_RootProject_AggregateArgs = {
  distinct_on?: Maybe<Array<IProject_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IProject_Order_By>>;
  where?: Maybe<IProject_Bool_Exp>;
};


/** query root */
export type IQuery_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQuery_RootTaskArgs = {
  distinct_on?: Maybe<Array<ITask_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITask_Order_By>>;
  where?: Maybe<ITask_Bool_Exp>;
};


/** query root */
export type IQuery_RootTask_AggregateArgs = {
  distinct_on?: Maybe<Array<ITask_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITask_Order_By>>;
  where?: Maybe<ITask_Bool_Exp>;
};


/** query root */
export type IQuery_RootTask_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQuery_RootUserArgs = {
  distinct_on?: Maybe<Array<IUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUser_Order_By>>;
  where?: Maybe<IUser_Bool_Exp>;
};


/** query root */
export type IQuery_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<IUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUser_Order_By>>;
  where?: Maybe<IUser_Bool_Exp>;
};


/** query root */
export type IQuery_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type ISubscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Project" */
  Project: Array<IProject>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: IProject_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<IProject>;
  /** fetch data from the table: "Task" */
  Task: Array<ITask>;
  /** fetch aggregated fields from the table: "Task" */
  Task_aggregate: ITask_Aggregate;
  /** fetch data from the table: "Task" using primary key columns */
  Task_by_pk?: Maybe<ITask>;
  /** fetch data from the table: "User" */
  User: Array<IUser>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: IUser_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<IUser>;
};


/** subscription root */
export type ISubscription_RootProjectArgs = {
  distinct_on?: Maybe<Array<IProject_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IProject_Order_By>>;
  where?: Maybe<IProject_Bool_Exp>;
};


/** subscription root */
export type ISubscription_RootProject_AggregateArgs = {
  distinct_on?: Maybe<Array<IProject_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IProject_Order_By>>;
  where?: Maybe<IProject_Bool_Exp>;
};


/** subscription root */
export type ISubscription_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscription_RootTaskArgs = {
  distinct_on?: Maybe<Array<ITask_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITask_Order_By>>;
  where?: Maybe<ITask_Bool_Exp>;
};


/** subscription root */
export type ISubscription_RootTask_AggregateArgs = {
  distinct_on?: Maybe<Array<ITask_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITask_Order_By>>;
  where?: Maybe<ITask_Bool_Exp>;
};


/** subscription root */
export type ISubscription_RootTask_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscription_RootUserArgs = {
  distinct_on?: Maybe<Array<IUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUser_Order_By>>;
  where?: Maybe<IUser_Bool_Exp>;
};


/** subscription root */
export type ISubscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<IUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUser_Order_By>>;
  where?: Maybe<IUser_Bool_Exp>;
};


/** subscription root */
export type ISubscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type IProjectQueryQueryVariables = Exact<{
  distinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  where?: Maybe<IProject_Bool_Exp>;
  projectTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectTasksLimit?: Maybe<Scalars['Int']>;
  projectTasksOffset?: Maybe<Scalars['Int']>;
  projectTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectTasksWhere?: Maybe<ITask_Bool_Exp>;
  projectTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectTasksAggregateLimit?: Maybe<Scalars['Int']>;
  projectTasksAggregateOffset?: Maybe<Scalars['Int']>;
  projectTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  projectTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  projectUserUserProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectUserUserProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  projectUserUserProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  projectUserUserProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  projectUserUserProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeProjectTasks?: Scalars['Boolean'];
  includeProjectTasksAggregate?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeProjectTasksAggregateNodes?: Scalars['Boolean'];
  includeProjectUser?: Scalars['Boolean'];
  includeProjectUserProjectsAggregate?: Scalars['Boolean'];
  includeProjectUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IProjectQueryQuery = (
  { __typename?: 'query_root' }
  & { Project: Array<(
    { __typename?: 'Project' }
    & Pick<IProject, 'id' | 'name' | 'user_id'>
    & { Tasks: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
    )>, Tasks_aggregate: (
      { __typename?: 'Task_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Task_aggregate_fields' }
        & Pick<ITask_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Task_avg_fields' }
          & Pick<ITask_Avg_Fields, 'id' | 'project_id'>
        )>, max?: Maybe<(
          { __typename?: 'Task_max_fields' }
          & Pick<ITask_Max_Fields, 'id' | 'name' | 'project_id'>
        )>, min?: Maybe<(
          { __typename?: 'Task_min_fields' }
          & Pick<ITask_Min_Fields, 'id' | 'name' | 'project_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Task_stddev_fields' }
          & Pick<ITask_Stddev_Fields, 'id' | 'project_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Task_stddev_pop_fields' }
          & Pick<ITask_Stddev_Pop_Fields, 'id' | 'project_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Task_stddev_samp_fields' }
          & Pick<ITask_Stddev_Samp_Fields, 'id' | 'project_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Task_sum_fields' }
          & Pick<ITask_Sum_Fields, 'id' | 'project_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Task_var_pop_fields' }
          & Pick<ITask_Var_Pop_Fields, 'id' | 'project_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Task_var_samp_fields' }
          & Pick<ITask_Var_Samp_Fields, 'id' | 'project_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Task_variance_fields' }
          & Pick<ITask_Variance_Fields, 'id' | 'project_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )> }
    ), User: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )> }
      ) }
    ) }
  )> }
);

export type IProjectAggregateQueryQueryVariables = Exact<{
  distinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  where?: Maybe<IProject_Bool_Exp>;
  projectAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  projectAggregateNodesNodesTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectAggregateNodesNodesTasksLimit?: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksOffset?: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectAggregateNodesNodesTasksWhere?: Maybe<ITask_Bool_Exp>;
  projectAggregateNodesNodesTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectAggregateNodesNodesTasksAggregateLimit?: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksAggregateOffset?: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectAggregateNodesNodesTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeProjectAggregateAggregate?: Scalars['Boolean'];
  includeProjectAggregateAggregateAvg?: Scalars['Boolean'];
  includeProjectAggregateAggregateMax?: Scalars['Boolean'];
  includeProjectAggregateAggregateMin?: Scalars['Boolean'];
  includeProjectAggregateAggregateStddev?: Scalars['Boolean'];
  includeProjectAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeProjectAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeProjectAggregateAggregateSum?: Scalars['Boolean'];
  includeProjectAggregateAggregateVarPop?: Scalars['Boolean'];
  includeProjectAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeProjectAggregateAggregateVariance?: Scalars['Boolean'];
  includeProjectAggregateNodes?: Scalars['Boolean'];
  includeProjectAggregateNodesTasks?: Scalars['Boolean'];
  includeProjectAggregateNodesTasksAggregate?: Scalars['Boolean'];
  includeProjectAggregateNodesTasksAggregateAggregate?: Scalars['Boolean'];
  includeProjectAggregateNodesTasksAggregateNodes?: Scalars['Boolean'];
  includeProjectAggregateNodesUser?: Scalars['Boolean'];
}>;


export type IProjectAggregateQueryQuery = (
  { __typename?: 'query_root' }
  & { Project_aggregate: (
    { __typename?: 'Project_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'Project_aggregate_fields' }
      & Pick<IProject_Aggregate_Fields, 'count'>
      & { avg?: Maybe<(
        { __typename?: 'Project_avg_fields' }
        & Pick<IProject_Avg_Fields, 'id' | 'user_id'>
      )>, max?: Maybe<(
        { __typename?: 'Project_max_fields' }
        & Pick<IProject_Max_Fields, 'id' | 'name' | 'user_id'>
      )>, min?: Maybe<(
        { __typename?: 'Project_min_fields' }
        & Pick<IProject_Min_Fields, 'id' | 'name' | 'user_id'>
      )>, stddev?: Maybe<(
        { __typename?: 'Project_stddev_fields' }
        & Pick<IProject_Stddev_Fields, 'id' | 'user_id'>
      )>, stddev_pop?: Maybe<(
        { __typename?: 'Project_stddev_pop_fields' }
        & Pick<IProject_Stddev_Pop_Fields, 'id' | 'user_id'>
      )>, stddev_samp?: Maybe<(
        { __typename?: 'Project_stddev_samp_fields' }
        & Pick<IProject_Stddev_Samp_Fields, 'id' | 'user_id'>
      )>, sum?: Maybe<(
        { __typename?: 'Project_sum_fields' }
        & Pick<IProject_Sum_Fields, 'id' | 'user_id'>
      )>, var_pop?: Maybe<(
        { __typename?: 'Project_var_pop_fields' }
        & Pick<IProject_Var_Pop_Fields, 'id' | 'user_id'>
      )>, var_samp?: Maybe<(
        { __typename?: 'Project_var_samp_fields' }
        & Pick<IProject_Var_Samp_Fields, 'id' | 'user_id'>
      )>, variance?: Maybe<(
        { __typename?: 'Project_variance_fields' }
        & Pick<IProject_Variance_Fields, 'id' | 'user_id'>
      )> }
    )>, nodes: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type IProjectByPkQueryQueryVariables = Exact<{
  id: Scalars['Int'];
  projectByPkTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectByPkTasksLimit?: Maybe<Scalars['Int']>;
  projectByPkTasksOffset?: Maybe<Scalars['Int']>;
  projectByPkTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectByPkTasksWhere?: Maybe<ITask_Bool_Exp>;
  projectByPkTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectByPkTasksAggregateLimit?: Maybe<Scalars['Int']>;
  projectByPkTasksAggregateOffset?: Maybe<Scalars['Int']>;
  projectByPkTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectByPkTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  projectByPkUserUserProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectByPkUserUserProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  projectByPkUserUserProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  projectByPkUserUserProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  projectByPkUserUserProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeProjectByPkTasks?: Scalars['Boolean'];
  includeProjectByPkTasksAggregate?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregate?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateNodes?: Scalars['Boolean'];
  includeProjectByPkUser?: Scalars['Boolean'];
  includeProjectByPkUserProjectsAggregate?: Scalars['Boolean'];
  includeProjectByPkUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IProjectByPkQueryQuery = (
  { __typename?: 'query_root' }
  & { Project_by_pk?: Maybe<(
    { __typename?: 'Project' }
    & Pick<IProject, 'id' | 'name' | 'user_id'>
    & { Tasks: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
    )>, Tasks_aggregate: (
      { __typename?: 'Task_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Task_aggregate_fields' }
        & Pick<ITask_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Task_avg_fields' }
          & Pick<ITask_Avg_Fields, 'id' | 'project_id'>
        )>, max?: Maybe<(
          { __typename?: 'Task_max_fields' }
          & Pick<ITask_Max_Fields, 'id' | 'name' | 'project_id'>
        )>, min?: Maybe<(
          { __typename?: 'Task_min_fields' }
          & Pick<ITask_Min_Fields, 'id' | 'name' | 'project_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Task_stddev_fields' }
          & Pick<ITask_Stddev_Fields, 'id' | 'project_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Task_stddev_pop_fields' }
          & Pick<ITask_Stddev_Pop_Fields, 'id' | 'project_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Task_stddev_samp_fields' }
          & Pick<ITask_Stddev_Samp_Fields, 'id' | 'project_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Task_sum_fields' }
          & Pick<ITask_Sum_Fields, 'id' | 'project_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Task_var_pop_fields' }
          & Pick<ITask_Var_Pop_Fields, 'id' | 'project_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Task_var_samp_fields' }
          & Pick<ITask_Var_Samp_Fields, 'id' | 'project_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Task_variance_fields' }
          & Pick<ITask_Variance_Fields, 'id' | 'project_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )> }
    ), User: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )> }
      ) }
    ) }
  )> }
);

export type ITaskQueryQueryVariables = Exact<{
  distinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  where?: Maybe<ITask_Bool_Exp>;
  taskProjectProjectTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskProjectProjectTasksAggregateLimit?: Maybe<Scalars['Int']>;
  taskProjectProjectTasksAggregateOffset?: Maybe<Scalars['Int']>;
  taskProjectProjectTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  taskProjectProjectTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeTaskProject?: Scalars['Boolean'];
  includeTaskProjectTasksAggregate?: Scalars['Boolean'];
  includeTaskProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeTaskProjectUser?: Scalars['Boolean'];
}>;


export type ITaskQueryQuery = (
  { __typename?: 'query_root' }
  & { Task: Array<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'project_id'>
    & { Project: (
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    ) }
  )> }
);

export type ITaskAggregateQueryQueryVariables = Exact<{
  distinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  where?: Maybe<ITask_Bool_Exp>;
  taskAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeTaskAggregateAggregate?: Scalars['Boolean'];
  includeTaskAggregateAggregateAvg?: Scalars['Boolean'];
  includeTaskAggregateAggregateMax?: Scalars['Boolean'];
  includeTaskAggregateAggregateMin?: Scalars['Boolean'];
  includeTaskAggregateAggregateStddev?: Scalars['Boolean'];
  includeTaskAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeTaskAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeTaskAggregateAggregateSum?: Scalars['Boolean'];
  includeTaskAggregateAggregateVarPop?: Scalars['Boolean'];
  includeTaskAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeTaskAggregateAggregateVariance?: Scalars['Boolean'];
  includeTaskAggregateNodes?: Scalars['Boolean'];
  includeTaskAggregateNodesProject?: Scalars['Boolean'];
  includeTaskAggregateNodesProjectUser?: Scalars['Boolean'];
}>;


export type ITaskAggregateQueryQuery = (
  { __typename?: 'query_root' }
  & { Task_aggregate: (
    { __typename?: 'Task_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'Task_aggregate_fields' }
      & Pick<ITask_Aggregate_Fields, 'count'>
      & { avg?: Maybe<(
        { __typename?: 'Task_avg_fields' }
        & Pick<ITask_Avg_Fields, 'id' | 'project_id'>
      )>, max?: Maybe<(
        { __typename?: 'Task_max_fields' }
        & Pick<ITask_Max_Fields, 'id' | 'name' | 'project_id'>
      )>, min?: Maybe<(
        { __typename?: 'Task_min_fields' }
        & Pick<ITask_Min_Fields, 'id' | 'name' | 'project_id'>
      )>, stddev?: Maybe<(
        { __typename?: 'Task_stddev_fields' }
        & Pick<ITask_Stddev_Fields, 'id' | 'project_id'>
      )>, stddev_pop?: Maybe<(
        { __typename?: 'Task_stddev_pop_fields' }
        & Pick<ITask_Stddev_Pop_Fields, 'id' | 'project_id'>
      )>, stddev_samp?: Maybe<(
        { __typename?: 'Task_stddev_samp_fields' }
        & Pick<ITask_Stddev_Samp_Fields, 'id' | 'project_id'>
      )>, sum?: Maybe<(
        { __typename?: 'Task_sum_fields' }
        & Pick<ITask_Sum_Fields, 'id' | 'project_id'>
      )>, var_pop?: Maybe<(
        { __typename?: 'Task_var_pop_fields' }
        & Pick<ITask_Var_Pop_Fields, 'id' | 'project_id'>
      )>, var_samp?: Maybe<(
        { __typename?: 'Task_var_samp_fields' }
        & Pick<ITask_Var_Samp_Fields, 'id' | 'project_id'>
      )>, variance?: Maybe<(
        { __typename?: 'Task_variance_fields' }
        & Pick<ITask_Variance_Fields, 'id' | 'project_id'>
      )> }
    )>, nodes: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
      & { Project: (
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { User: (
          { __typename?: 'User' }
          & Pick<IUser, 'id' | 'name'>
        ) }
      ) }
    )> }
  ) }
);

export type ITaskByPkQueryQueryVariables = Exact<{
  id: Scalars['Int'];
  taskByPkProjectProjectTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskByPkProjectProjectTasksAggregateLimit?: Maybe<Scalars['Int']>;
  taskByPkProjectProjectTasksAggregateOffset?: Maybe<Scalars['Int']>;
  taskByPkProjectProjectTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  taskByPkProjectProjectTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeTaskByPkProject?: Scalars['Boolean'];
  includeTaskByPkProjectTasksAggregate?: Scalars['Boolean'];
  includeTaskByPkProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeTaskByPkProjectUser?: Scalars['Boolean'];
}>;


export type ITaskByPkQueryQuery = (
  { __typename?: 'query_root' }
  & { Task_by_pk?: Maybe<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'project_id'>
    & { Project: (
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    ) }
  )> }
);

export type IUserQueryQueryVariables = Exact<{
  distinctOn?: Maybe<Array<IUser_Select_Column> | IUser_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IUser_Order_By> | IUser_Order_By>;
  where?: Maybe<IUser_Bool_Exp>;
  userProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userProjectsLimit?: Maybe<Scalars['Int']>;
  userProjectsOffset?: Maybe<Scalars['Int']>;
  userProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userProjectsWhere?: Maybe<IProject_Bool_Exp>;
  userProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  userProjectsProjectsTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsProjectsTasksAggregateLimit?: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksAggregateOffset?: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userProjectsProjectsTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  userProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  userProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  userProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksLimit?: Maybe<Scalars['Int']>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksOffset?: Maybe<Scalars['Int']>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksWhere?: Maybe<ITask_Bool_Exp>;
  includeUserProjects?: Scalars['Boolean'];
  includeUserProjectsTasks?: Scalars['Boolean'];
  includeUserProjectsTasksAggregate?: Scalars['Boolean'];
  includeUserProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeUserProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeUserProjectsAggregate?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeUserProjectsAggregateNodes?: Scalars['Boolean'];
  includeUserProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IUserQueryQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<IUser, 'id' | 'name'>
    & { Projects: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ) }
    )>, Projects_aggregate: (
      { __typename?: 'Project_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Project_aggregate_fields' }
        & Pick<IProject_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Project_avg_fields' }
          & Pick<IProject_Avg_Fields, 'id' | 'user_id'>
        )>, max?: Maybe<(
          { __typename?: 'Project_max_fields' }
          & Pick<IProject_Max_Fields, 'id' | 'name' | 'user_id'>
        )>, min?: Maybe<(
          { __typename?: 'Project_min_fields' }
          & Pick<IProject_Min_Fields, 'id' | 'name' | 'user_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Project_stddev_fields' }
          & Pick<IProject_Stddev_Fields, 'id' | 'user_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Project_stddev_pop_fields' }
          & Pick<IProject_Stddev_Pop_Fields, 'id' | 'user_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Project_stddev_samp_fields' }
          & Pick<IProject_Stddev_Samp_Fields, 'id' | 'user_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Project_sum_fields' }
          & Pick<IProject_Sum_Fields, 'id' | 'user_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Project_var_pop_fields' }
          & Pick<IProject_Var_Pop_Fields, 'id' | 'user_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Project_var_samp_fields' }
          & Pick<IProject_Var_Samp_Fields, 'id' | 'user_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Project_variance_fields' }
          & Pick<IProject_Variance_Fields, 'id' | 'user_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )> }
    ) }
  )> }
);

export type IUserAggregateQueryQueryVariables = Exact<{
  distinctOn?: Maybe<Array<IUser_Select_Column> | IUser_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IUser_Order_By> | IUser_Order_By>;
  where?: Maybe<IUser_Bool_Exp>;
  userAggregateAggregateAggregateCountColumns?: Maybe<Array<IUser_Select_Column> | IUser_Select_Column>;
  userAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  userAggregateNodesNodesProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userAggregateNodesNodesProjectsLimit?: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsOffset?: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userAggregateNodesNodesProjectsWhere?: Maybe<IProject_Bool_Exp>;
  userAggregateNodesNodesProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userAggregateNodesNodesProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userAggregateNodesNodesProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  userAggregateNodesNodesProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userAggregateNodesNodesProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userAggregateNodesNodesProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeUserAggregateAggregate?: Scalars['Boolean'];
  includeUserAggregateAggregateAvg?: Scalars['Boolean'];
  includeUserAggregateAggregateMax?: Scalars['Boolean'];
  includeUserAggregateAggregateMin?: Scalars['Boolean'];
  includeUserAggregateAggregateStddev?: Scalars['Boolean'];
  includeUserAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUserAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUserAggregateAggregateSum?: Scalars['Boolean'];
  includeUserAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUserAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUserAggregateAggregateVariance?: Scalars['Boolean'];
  includeUserAggregateNodes?: Scalars['Boolean'];
  includeUserAggregateNodesProjects?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsTasks?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsAggregate?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IUserAggregateQueryQuery = (
  { __typename?: 'query_root' }
  & { User_aggregate: (
    { __typename?: 'User_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'User_aggregate_fields' }
      & Pick<IUser_Aggregate_Fields, 'count'>
      & { avg?: Maybe<(
        { __typename?: 'User_avg_fields' }
        & Pick<IUser_Avg_Fields, 'id'>
      )>, max?: Maybe<(
        { __typename?: 'User_max_fields' }
        & Pick<IUser_Max_Fields, 'id' | 'name'>
      )>, min?: Maybe<(
        { __typename?: 'User_min_fields' }
        & Pick<IUser_Min_Fields, 'id' | 'name'>
      )>, stddev?: Maybe<(
        { __typename?: 'User_stddev_fields' }
        & Pick<IUser_Stddev_Fields, 'id'>
      )>, stddev_pop?: Maybe<(
        { __typename?: 'User_stddev_pop_fields' }
        & Pick<IUser_Stddev_Pop_Fields, 'id'>
      )>, stddev_samp?: Maybe<(
        { __typename?: 'User_stddev_samp_fields' }
        & Pick<IUser_Stddev_Samp_Fields, 'id'>
      )>, sum?: Maybe<(
        { __typename?: 'User_sum_fields' }
        & Pick<IUser_Sum_Fields, 'id'>
      )>, var_pop?: Maybe<(
        { __typename?: 'User_var_pop_fields' }
        & Pick<IUser_Var_Pop_Fields, 'id'>
      )>, var_samp?: Maybe<(
        { __typename?: 'User_var_samp_fields' }
        & Pick<IUser_Var_Samp_Fields, 'id'>
      )>, variance?: Maybe<(
        { __typename?: 'User_variance_fields' }
        & Pick<IUser_Variance_Fields, 'id'>
      )> }
    )>, nodes: Array<(
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )>, Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Project' }
          & Pick<IProject, 'id' | 'name' | 'user_id'>
        )> }
      ) }
    )> }
  ) }
);

export type IUserByPkQueryQueryVariables = Exact<{
  id: Scalars['Int'];
  userByPkProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userByPkProjectsLimit?: Maybe<Scalars['Int']>;
  userByPkProjectsOffset?: Maybe<Scalars['Int']>;
  userByPkProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userByPkProjectsWhere?: Maybe<IProject_Bool_Exp>;
  userByPkProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userByPkProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  userByPkProjectsProjectsTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsProjectsTasksAggregateLimit?: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksAggregateOffset?: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userByPkProjectsProjectsTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  userByPkProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userByPkProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userByPkProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit?: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset?: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere?: Maybe<ITask_Bool_Exp>;
  includeUserByPkProjects?: Scalars['Boolean'];
  includeUserByPkProjectsTasks?: Scalars['Boolean'];
  includeUserByPkProjectsTasksAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeUserByPkProjectsAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateNodes?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IUserByPkQueryQuery = (
  { __typename?: 'query_root' }
  & { User_by_pk?: Maybe<(
    { __typename?: 'User' }
    & Pick<IUser, 'id' | 'name'>
    & { Projects: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ) }
    )>, Projects_aggregate: (
      { __typename?: 'Project_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Project_aggregate_fields' }
        & Pick<IProject_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Project_avg_fields' }
          & Pick<IProject_Avg_Fields, 'id' | 'user_id'>
        )>, max?: Maybe<(
          { __typename?: 'Project_max_fields' }
          & Pick<IProject_Max_Fields, 'id' | 'name' | 'user_id'>
        )>, min?: Maybe<(
          { __typename?: 'Project_min_fields' }
          & Pick<IProject_Min_Fields, 'id' | 'name' | 'user_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Project_stddev_fields' }
          & Pick<IProject_Stddev_Fields, 'id' | 'user_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Project_stddev_pop_fields' }
          & Pick<IProject_Stddev_Pop_Fields, 'id' | 'user_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Project_stddev_samp_fields' }
          & Pick<IProject_Stddev_Samp_Fields, 'id' | 'user_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Project_sum_fields' }
          & Pick<IProject_Sum_Fields, 'id' | 'user_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Project_var_pop_fields' }
          & Pick<IProject_Var_Pop_Fields, 'id' | 'user_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Project_var_samp_fields' }
          & Pick<IProject_Var_Samp_Fields, 'id' | 'user_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Project_variance_fields' }
          & Pick<IProject_Variance_Fields, 'id' | 'user_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )> }
    ) }
  )> }
);

export type IDeleteProjectMutationMutationVariables = Exact<{
  where: IProject_Bool_Exp;
  deleteProjectReturningReturningTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectReturningReturningTasksLimit?: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksOffset?: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectReturningReturningTasksWhere?: Maybe<ITask_Bool_Exp>;
  deleteProjectReturningReturningTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectReturningReturningTasksAggregateLimit?: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksAggregateOffset?: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectReturningReturningTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeDeleteProjectReturning?: Scalars['Boolean'];
  includeDeleteProjectReturningTasks?: Scalars['Boolean'];
  includeDeleteProjectReturningTasksAggregate?: Scalars['Boolean'];
  includeDeleteProjectReturningTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteProjectReturningTasksAggregateNodes?: Scalars['Boolean'];
  includeDeleteProjectReturningUser?: Scalars['Boolean'];
}>;


export type IDeleteProjectMutationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Project?: Maybe<(
    { __typename?: 'Project_mutation_response' }
    & Pick<IProject_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type IDeleteProjectByPkMutationMutationVariables = Exact<{
  id: Scalars['Int'];
  deleteProjectByPkTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectByPkTasksLimit?: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksOffset?: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectByPkTasksWhere?: Maybe<ITask_Bool_Exp>;
  deleteProjectByPkTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectByPkTasksAggregateLimit?: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksAggregateOffset?: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectByPkTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  deleteProjectByPkUserUserProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteProjectByPkUserUserProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  deleteProjectByPkUserUserProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  deleteProjectByPkUserUserProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteProjectByPkUserUserProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeDeleteProjectByPkTasks?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregate?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateNodes?: Scalars['Boolean'];
  includeDeleteProjectByPkUser?: Scalars['Boolean'];
  includeDeleteProjectByPkUserProjectsAggregate?: Scalars['Boolean'];
  includeDeleteProjectByPkUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IDeleteProjectByPkMutationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Project_by_pk?: Maybe<(
    { __typename?: 'Project' }
    & Pick<IProject, 'id' | 'name' | 'user_id'>
    & { Tasks: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
    )>, Tasks_aggregate: (
      { __typename?: 'Task_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Task_aggregate_fields' }
        & Pick<ITask_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Task_avg_fields' }
          & Pick<ITask_Avg_Fields, 'id' | 'project_id'>
        )>, max?: Maybe<(
          { __typename?: 'Task_max_fields' }
          & Pick<ITask_Max_Fields, 'id' | 'name' | 'project_id'>
        )>, min?: Maybe<(
          { __typename?: 'Task_min_fields' }
          & Pick<ITask_Min_Fields, 'id' | 'name' | 'project_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Task_stddev_fields' }
          & Pick<ITask_Stddev_Fields, 'id' | 'project_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Task_stddev_pop_fields' }
          & Pick<ITask_Stddev_Pop_Fields, 'id' | 'project_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Task_stddev_samp_fields' }
          & Pick<ITask_Stddev_Samp_Fields, 'id' | 'project_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Task_sum_fields' }
          & Pick<ITask_Sum_Fields, 'id' | 'project_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Task_var_pop_fields' }
          & Pick<ITask_Var_Pop_Fields, 'id' | 'project_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Task_var_samp_fields' }
          & Pick<ITask_Var_Samp_Fields, 'id' | 'project_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Task_variance_fields' }
          & Pick<ITask_Variance_Fields, 'id' | 'project_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )> }
    ), User: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )> }
      ) }
    ) }
  )> }
);

export type IDeleteTaskMutationMutationVariables = Exact<{
  where: ITask_Bool_Exp;
  includeDeleteTaskReturning?: Scalars['Boolean'];
  includeDeleteTaskReturningProject?: Scalars['Boolean'];
  includeDeleteTaskReturningProjectUser?: Scalars['Boolean'];
}>;


export type IDeleteTaskMutationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Task?: Maybe<(
    { __typename?: 'Task_mutation_response' }
    & Pick<ITask_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
      & { Project: (
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { User: (
          { __typename?: 'User' }
          & Pick<IUser, 'id' | 'name'>
        ) }
      ) }
    )> }
  )> }
);

export type IDeleteTaskByPkMutationMutationVariables = Exact<{
  id: Scalars['Int'];
  deleteTaskByPkProjectProjectTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteTaskByPkProjectProjectTasksAggregateLimit?: Maybe<Scalars['Int']>;
  deleteTaskByPkProjectProjectTasksAggregateOffset?: Maybe<Scalars['Int']>;
  deleteTaskByPkProjectProjectTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteTaskByPkProjectProjectTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeDeleteTaskByPkProject?: Scalars['Boolean'];
  includeDeleteTaskByPkProjectTasksAggregate?: Scalars['Boolean'];
  includeDeleteTaskByPkProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteTaskByPkProjectUser?: Scalars['Boolean'];
}>;


export type IDeleteTaskByPkMutationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Task_by_pk?: Maybe<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'project_id'>
    & { Project: (
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    ) }
  )> }
);

export type IDeleteUserMutationMutationVariables = Exact<{
  where: IUser_Bool_Exp;
  deleteUserReturningReturningProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserReturningReturningProjectsLimit?: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsOffset?: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserReturningReturningProjectsWhere?: Maybe<IProject_Bool_Exp>;
  deleteUserReturningReturningProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserReturningReturningProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserReturningReturningProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  deleteUserReturningReturningProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserReturningReturningProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserReturningReturningProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeDeleteUserReturning?: Scalars['Boolean'];
  includeDeleteUserReturningProjects?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsTasks?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsAggregate?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsAggregateAggregate?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IDeleteUserMutationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_User?: Maybe<(
    { __typename?: 'User_mutation_response' }
    & Pick<IUser_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )>, Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Project' }
          & Pick<IProject, 'id' | 'name' | 'user_id'>
        )> }
      ) }
    )> }
  )> }
);

export type IDeleteUserByPkMutationMutationVariables = Exact<{
  id: Scalars['Int'];
  deleteUserByPkProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserByPkProjectsLimit?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsOffset?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserByPkProjectsWhere?: Maybe<IProject_Bool_Exp>;
  deleteUserByPkProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserByPkProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  deleteUserByPkProjectsProjectsTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsProjectsTasksAggregateLimit?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksAggregateOffset?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserByPkProjectsProjectsTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  deleteUserByPkProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserByPkProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserByPkProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset?: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere?: Maybe<ITask_Bool_Exp>;
  includeDeleteUserByPkProjects?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasks?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasksAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateNodes?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IDeleteUserByPkMutationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_User_by_pk?: Maybe<(
    { __typename?: 'User' }
    & Pick<IUser, 'id' | 'name'>
    & { Projects: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ) }
    )>, Projects_aggregate: (
      { __typename?: 'Project_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Project_aggregate_fields' }
        & Pick<IProject_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Project_avg_fields' }
          & Pick<IProject_Avg_Fields, 'id' | 'user_id'>
        )>, max?: Maybe<(
          { __typename?: 'Project_max_fields' }
          & Pick<IProject_Max_Fields, 'id' | 'name' | 'user_id'>
        )>, min?: Maybe<(
          { __typename?: 'Project_min_fields' }
          & Pick<IProject_Min_Fields, 'id' | 'name' | 'user_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Project_stddev_fields' }
          & Pick<IProject_Stddev_Fields, 'id' | 'user_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Project_stddev_pop_fields' }
          & Pick<IProject_Stddev_Pop_Fields, 'id' | 'user_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Project_stddev_samp_fields' }
          & Pick<IProject_Stddev_Samp_Fields, 'id' | 'user_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Project_sum_fields' }
          & Pick<IProject_Sum_Fields, 'id' | 'user_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Project_var_pop_fields' }
          & Pick<IProject_Var_Pop_Fields, 'id' | 'user_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Project_var_samp_fields' }
          & Pick<IProject_Var_Samp_Fields, 'id' | 'user_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Project_variance_fields' }
          & Pick<IProject_Variance_Fields, 'id' | 'user_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )> }
    ) }
  )> }
);

export type IInsertProjectMutationMutationVariables = Exact<{
  objects: Array<IProject_Insert_Input> | IProject_Insert_Input;
  onConflict?: Maybe<IProject_On_Conflict>;
  insertProjectReturningReturningTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectReturningReturningTasksLimit?: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksOffset?: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectReturningReturningTasksWhere?: Maybe<ITask_Bool_Exp>;
  insertProjectReturningReturningTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectReturningReturningTasksAggregateLimit?: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksAggregateOffset?: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectReturningReturningTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeInsertProjectReturning?: Scalars['Boolean'];
  includeInsertProjectReturningTasks?: Scalars['Boolean'];
  includeInsertProjectReturningTasksAggregate?: Scalars['Boolean'];
  includeInsertProjectReturningTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertProjectReturningTasksAggregateNodes?: Scalars['Boolean'];
  includeInsertProjectReturningUser?: Scalars['Boolean'];
}>;


export type IInsertProjectMutationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Project?: Maybe<(
    { __typename?: 'Project_mutation_response' }
    & Pick<IProject_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type IInsertProjectOneMutationMutationVariables = Exact<{
  object: IProject_Insert_Input;
  onConflict?: Maybe<IProject_On_Conflict>;
  insertProjectOneTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectOneTasksLimit?: Maybe<Scalars['Int']>;
  insertProjectOneTasksOffset?: Maybe<Scalars['Int']>;
  insertProjectOneTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectOneTasksWhere?: Maybe<ITask_Bool_Exp>;
  insertProjectOneTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectOneTasksAggregateLimit?: Maybe<Scalars['Int']>;
  insertProjectOneTasksAggregateOffset?: Maybe<Scalars['Int']>;
  insertProjectOneTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectOneTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  insertProjectOneUserUserProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertProjectOneUserUserProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  insertProjectOneUserUserProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  insertProjectOneUserUserProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertProjectOneUserUserProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeInsertProjectOneTasks?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregate?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateNodes?: Scalars['Boolean'];
  includeInsertProjectOneUser?: Scalars['Boolean'];
  includeInsertProjectOneUserProjectsAggregate?: Scalars['Boolean'];
  includeInsertProjectOneUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IInsertProjectOneMutationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Project_one?: Maybe<(
    { __typename?: 'Project' }
    & Pick<IProject, 'id' | 'name' | 'user_id'>
    & { Tasks: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
    )>, Tasks_aggregate: (
      { __typename?: 'Task_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Task_aggregate_fields' }
        & Pick<ITask_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Task_avg_fields' }
          & Pick<ITask_Avg_Fields, 'id' | 'project_id'>
        )>, max?: Maybe<(
          { __typename?: 'Task_max_fields' }
          & Pick<ITask_Max_Fields, 'id' | 'name' | 'project_id'>
        )>, min?: Maybe<(
          { __typename?: 'Task_min_fields' }
          & Pick<ITask_Min_Fields, 'id' | 'name' | 'project_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Task_stddev_fields' }
          & Pick<ITask_Stddev_Fields, 'id' | 'project_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Task_stddev_pop_fields' }
          & Pick<ITask_Stddev_Pop_Fields, 'id' | 'project_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Task_stddev_samp_fields' }
          & Pick<ITask_Stddev_Samp_Fields, 'id' | 'project_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Task_sum_fields' }
          & Pick<ITask_Sum_Fields, 'id' | 'project_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Task_var_pop_fields' }
          & Pick<ITask_Var_Pop_Fields, 'id' | 'project_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Task_var_samp_fields' }
          & Pick<ITask_Var_Samp_Fields, 'id' | 'project_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Task_variance_fields' }
          & Pick<ITask_Variance_Fields, 'id' | 'project_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )> }
    ), User: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )> }
      ) }
    ) }
  )> }
);

export type IInsertTaskMutationMutationVariables = Exact<{
  objects: Array<ITask_Insert_Input> | ITask_Insert_Input;
  onConflict?: Maybe<ITask_On_Conflict>;
  includeInsertTaskReturning?: Scalars['Boolean'];
  includeInsertTaskReturningProject?: Scalars['Boolean'];
  includeInsertTaskReturningProjectUser?: Scalars['Boolean'];
}>;


export type IInsertTaskMutationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Task?: Maybe<(
    { __typename?: 'Task_mutation_response' }
    & Pick<ITask_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
      & { Project: (
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { User: (
          { __typename?: 'User' }
          & Pick<IUser, 'id' | 'name'>
        ) }
      ) }
    )> }
  )> }
);

export type IInsertTaskOneMutationMutationVariables = Exact<{
  object: ITask_Insert_Input;
  onConflict?: Maybe<ITask_On_Conflict>;
  insertTaskOneProjectProjectTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertTaskOneProjectProjectTasksAggregateLimit?: Maybe<Scalars['Int']>;
  insertTaskOneProjectProjectTasksAggregateOffset?: Maybe<Scalars['Int']>;
  insertTaskOneProjectProjectTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertTaskOneProjectProjectTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeInsertTaskOneProject?: Scalars['Boolean'];
  includeInsertTaskOneProjectTasksAggregate?: Scalars['Boolean'];
  includeInsertTaskOneProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertTaskOneProjectUser?: Scalars['Boolean'];
}>;


export type IInsertTaskOneMutationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Task_one?: Maybe<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'project_id'>
    & { Project: (
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    ) }
  )> }
);

export type IInsertUserMutationMutationVariables = Exact<{
  objects: Array<IUser_Insert_Input> | IUser_Insert_Input;
  onConflict?: Maybe<IUser_On_Conflict>;
  insertUserReturningReturningProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserReturningReturningProjectsLimit?: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsOffset?: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserReturningReturningProjectsWhere?: Maybe<IProject_Bool_Exp>;
  insertUserReturningReturningProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserReturningReturningProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserReturningReturningProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  insertUserReturningReturningProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserReturningReturningProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserReturningReturningProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeInsertUserReturning?: Scalars['Boolean'];
  includeInsertUserReturningProjects?: Scalars['Boolean'];
  includeInsertUserReturningProjectsTasks?: Scalars['Boolean'];
  includeInsertUserReturningProjectsAggregate?: Scalars['Boolean'];
  includeInsertUserReturningProjectsAggregateAggregate?: Scalars['Boolean'];
  includeInsertUserReturningProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IInsertUserMutationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_User?: Maybe<(
    { __typename?: 'User_mutation_response' }
    & Pick<IUser_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )>, Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Project' }
          & Pick<IProject, 'id' | 'name' | 'user_id'>
        )> }
      ) }
    )> }
  )> }
);

export type IInsertUserOneMutationMutationVariables = Exact<{
  object: IUser_Insert_Input;
  onConflict?: Maybe<IUser_On_Conflict>;
  insertUserOneProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserOneProjectsLimit?: Maybe<Scalars['Int']>;
  insertUserOneProjectsOffset?: Maybe<Scalars['Int']>;
  insertUserOneProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserOneProjectsWhere?: Maybe<IProject_Bool_Exp>;
  insertUserOneProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserOneProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  insertUserOneProjectsProjectsTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsProjectsTasksAggregateLimit?: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksAggregateOffset?: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserOneProjectsProjectsTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  insertUserOneProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserOneProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserOneProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit?: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset?: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere?: Maybe<ITask_Bool_Exp>;
  includeInsertUserOneProjects?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasks?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasksAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateNodes?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IInsertUserOneMutationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_User_one?: Maybe<(
    { __typename?: 'User' }
    & Pick<IUser, 'id' | 'name'>
    & { Projects: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ) }
    )>, Projects_aggregate: (
      { __typename?: 'Project_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Project_aggregate_fields' }
        & Pick<IProject_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Project_avg_fields' }
          & Pick<IProject_Avg_Fields, 'id' | 'user_id'>
        )>, max?: Maybe<(
          { __typename?: 'Project_max_fields' }
          & Pick<IProject_Max_Fields, 'id' | 'name' | 'user_id'>
        )>, min?: Maybe<(
          { __typename?: 'Project_min_fields' }
          & Pick<IProject_Min_Fields, 'id' | 'name' | 'user_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Project_stddev_fields' }
          & Pick<IProject_Stddev_Fields, 'id' | 'user_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Project_stddev_pop_fields' }
          & Pick<IProject_Stddev_Pop_Fields, 'id' | 'user_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Project_stddev_samp_fields' }
          & Pick<IProject_Stddev_Samp_Fields, 'id' | 'user_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Project_sum_fields' }
          & Pick<IProject_Sum_Fields, 'id' | 'user_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Project_var_pop_fields' }
          & Pick<IProject_Var_Pop_Fields, 'id' | 'user_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Project_var_samp_fields' }
          & Pick<IProject_Var_Samp_Fields, 'id' | 'user_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Project_variance_fields' }
          & Pick<IProject_Variance_Fields, 'id' | 'user_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )> }
    ) }
  )> }
);

export type IUpdateProjectMutationMutationVariables = Exact<{
  inc?: Maybe<IProject_Inc_Input>;
  set?: Maybe<IProject_Set_Input>;
  where: IProject_Bool_Exp;
  updateProjectReturningReturningTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectReturningReturningTasksLimit?: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksOffset?: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectReturningReturningTasksWhere?: Maybe<ITask_Bool_Exp>;
  updateProjectReturningReturningTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectReturningReturningTasksAggregateLimit?: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksAggregateOffset?: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectReturningReturningTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeUpdateProjectReturning?: Scalars['Boolean'];
  includeUpdateProjectReturningTasks?: Scalars['Boolean'];
  includeUpdateProjectReturningTasksAggregate?: Scalars['Boolean'];
  includeUpdateProjectReturningTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateProjectReturningTasksAggregateNodes?: Scalars['Boolean'];
  includeUpdateProjectReturningUser?: Scalars['Boolean'];
}>;


export type IUpdateProjectMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_Project?: Maybe<(
    { __typename?: 'Project_mutation_response' }
    & Pick<IProject_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type IUpdateProjectByPkMutationMutationVariables = Exact<{
  inc?: Maybe<IProject_Inc_Input>;
  set?: Maybe<IProject_Set_Input>;
  pkColumns: IProject_Pk_Columns_Input;
  updateProjectByPkTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectByPkTasksLimit?: Maybe<Scalars['Int']>;
  updateProjectByPkTasksOffset?: Maybe<Scalars['Int']>;
  updateProjectByPkTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectByPkTasksWhere?: Maybe<ITask_Bool_Exp>;
  updateProjectByPkTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectByPkTasksAggregateLimit?: Maybe<Scalars['Int']>;
  updateProjectByPkTasksAggregateOffset?: Maybe<Scalars['Int']>;
  updateProjectByPkTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectByPkTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  updateProjectByPkUserUserProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateProjectByPkUserUserProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  updateProjectByPkUserUserProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  updateProjectByPkUserUserProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateProjectByPkUserUserProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeUpdateProjectByPkTasks?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregate?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateNodes?: Scalars['Boolean'];
  includeUpdateProjectByPkUser?: Scalars['Boolean'];
  includeUpdateProjectByPkUserProjectsAggregate?: Scalars['Boolean'];
  includeUpdateProjectByPkUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IUpdateProjectByPkMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_Project_by_pk?: Maybe<(
    { __typename?: 'Project' }
    & Pick<IProject, 'id' | 'name' | 'user_id'>
    & { Tasks: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
    )>, Tasks_aggregate: (
      { __typename?: 'Task_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Task_aggregate_fields' }
        & Pick<ITask_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Task_avg_fields' }
          & Pick<ITask_Avg_Fields, 'id' | 'project_id'>
        )>, max?: Maybe<(
          { __typename?: 'Task_max_fields' }
          & Pick<ITask_Max_Fields, 'id' | 'name' | 'project_id'>
        )>, min?: Maybe<(
          { __typename?: 'Task_min_fields' }
          & Pick<ITask_Min_Fields, 'id' | 'name' | 'project_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Task_stddev_fields' }
          & Pick<ITask_Stddev_Fields, 'id' | 'project_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Task_stddev_pop_fields' }
          & Pick<ITask_Stddev_Pop_Fields, 'id' | 'project_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Task_stddev_samp_fields' }
          & Pick<ITask_Stddev_Samp_Fields, 'id' | 'project_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Task_sum_fields' }
          & Pick<ITask_Sum_Fields, 'id' | 'project_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Task_var_pop_fields' }
          & Pick<ITask_Var_Pop_Fields, 'id' | 'project_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Task_var_samp_fields' }
          & Pick<ITask_Var_Samp_Fields, 'id' | 'project_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Task_variance_fields' }
          & Pick<ITask_Variance_Fields, 'id' | 'project_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )> }
    ), User: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )> }
      ) }
    ) }
  )> }
);

export type IUpdateTaskMutationMutationVariables = Exact<{
  inc?: Maybe<ITask_Inc_Input>;
  set?: Maybe<ITask_Set_Input>;
  where: ITask_Bool_Exp;
  includeUpdateTaskReturning?: Scalars['Boolean'];
  includeUpdateTaskReturningProject?: Scalars['Boolean'];
  includeUpdateTaskReturningProjectUser?: Scalars['Boolean'];
}>;


export type IUpdateTaskMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_Task?: Maybe<(
    { __typename?: 'Task_mutation_response' }
    & Pick<ITask_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'Task' }
      & Pick<ITask, 'id' | 'name' | 'project_id'>
      & { Project: (
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { User: (
          { __typename?: 'User' }
          & Pick<IUser, 'id' | 'name'>
        ) }
      ) }
    )> }
  )> }
);

export type IUpdateTaskByPkMutationMutationVariables = Exact<{
  inc?: Maybe<ITask_Inc_Input>;
  set?: Maybe<ITask_Set_Input>;
  pkColumns: ITask_Pk_Columns_Input;
  updateTaskByPkProjectProjectTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateTaskByPkProjectProjectTasksAggregateLimit?: Maybe<Scalars['Int']>;
  updateTaskByPkProjectProjectTasksAggregateOffset?: Maybe<Scalars['Int']>;
  updateTaskByPkProjectProjectTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateTaskByPkProjectProjectTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeUpdateTaskByPkProject?: Scalars['Boolean'];
  includeUpdateTaskByPkProjectTasksAggregate?: Scalars['Boolean'];
  includeUpdateTaskByPkProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateTaskByPkProjectUser?: Scalars['Boolean'];
}>;


export type IUpdateTaskByPkMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_Task_by_pk?: Maybe<(
    { __typename?: 'Task' }
    & Pick<ITask, 'id' | 'name' | 'project_id'>
    & { Project: (
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )> }
      ), User: (
        { __typename?: 'User' }
        & Pick<IUser, 'id' | 'name'>
      ) }
    ) }
  )> }
);

export type IUpdateUserMutationMutationVariables = Exact<{
  inc?: Maybe<IUser_Inc_Input>;
  set?: Maybe<IUser_Set_Input>;
  where: IUser_Bool_Exp;
  updateUserReturningReturningProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserReturningReturningProjectsLimit?: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsOffset?: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserReturningReturningProjectsWhere?: Maybe<IProject_Bool_Exp>;
  updateUserReturningReturningProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserReturningReturningProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserReturningReturningProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  updateUserReturningReturningProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserReturningReturningProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserReturningReturningProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  includeUpdateUserReturning?: Scalars['Boolean'];
  includeUpdateUserReturningProjects?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsTasks?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsAggregate?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IUpdateUserMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_User?: Maybe<(
    { __typename?: 'User_mutation_response' }
    & Pick<IUser_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'name'>
      & { Projects: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )>, Projects_aggregate: (
        { __typename?: 'Project_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Project_aggregate_fields' }
          & Pick<IProject_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Project' }
          & Pick<IProject, 'id' | 'name' | 'user_id'>
        )> }
      ) }
    )> }
  )> }
);

export type IUpdateUserByPkMutationMutationVariables = Exact<{
  inc?: Maybe<IUser_Inc_Input>;
  set?: Maybe<IUser_Set_Input>;
  pkColumns: IUser_Pk_Columns_Input;
  updateUserByPkProjectsDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserByPkProjectsLimit?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsOffset?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserByPkProjectsWhere?: Maybe<IProject_Bool_Exp>;
  updateUserByPkProjectsProjectsTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsProjectsTasksLimit?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksOffset?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserByPkProjectsProjectsTasksWhere?: Maybe<ITask_Bool_Exp>;
  updateUserByPkProjectsProjectsTasksAggregateDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsProjectsTasksAggregateLimit?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksAggregateOffset?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksAggregateOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserByPkProjectsProjectsTasksAggregateWhere?: Maybe<ITask_Bool_Exp>;
  updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  updateUserByPkProjectsAggregateDistinctOn?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserByPkProjectsAggregateLimit?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateOffset?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateOrderBy?: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserByPkProjectsAggregateWhere?: Maybe<IProject_Bool_Exp>;
  updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns?: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct?: Maybe<Scalars['Boolean']>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn?: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset?: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy?: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere?: Maybe<ITask_Bool_Exp>;
  includeUpdateUserByPkProjects?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasks?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasksAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateNodes?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IUpdateUserByPkMutationMutation = (
  { __typename?: 'mutation_root' }
  & { update_User_by_pk?: Maybe<(
    { __typename?: 'User' }
    & Pick<IUser, 'id' | 'name'>
    & { Projects: Array<(
      { __typename?: 'Project' }
      & Pick<IProject, 'id' | 'name' | 'user_id'>
      & { Tasks: Array<(
        { __typename?: 'Task' }
        & Pick<ITask, 'id' | 'name' | 'project_id'>
      )>, Tasks_aggregate: (
        { __typename?: 'Task_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'Task_aggregate_fields' }
          & Pick<ITask_Aggregate_Fields, 'count'>
        )>, nodes: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      ) }
    )>, Projects_aggregate: (
      { __typename?: 'Project_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Project_aggregate_fields' }
        & Pick<IProject_Aggregate_Fields, 'count'>
        & { avg?: Maybe<(
          { __typename?: 'Project_avg_fields' }
          & Pick<IProject_Avg_Fields, 'id' | 'user_id'>
        )>, max?: Maybe<(
          { __typename?: 'Project_max_fields' }
          & Pick<IProject_Max_Fields, 'id' | 'name' | 'user_id'>
        )>, min?: Maybe<(
          { __typename?: 'Project_min_fields' }
          & Pick<IProject_Min_Fields, 'id' | 'name' | 'user_id'>
        )>, stddev?: Maybe<(
          { __typename?: 'Project_stddev_fields' }
          & Pick<IProject_Stddev_Fields, 'id' | 'user_id'>
        )>, stddev_pop?: Maybe<(
          { __typename?: 'Project_stddev_pop_fields' }
          & Pick<IProject_Stddev_Pop_Fields, 'id' | 'user_id'>
        )>, stddev_samp?: Maybe<(
          { __typename?: 'Project_stddev_samp_fields' }
          & Pick<IProject_Stddev_Samp_Fields, 'id' | 'user_id'>
        )>, sum?: Maybe<(
          { __typename?: 'Project_sum_fields' }
          & Pick<IProject_Sum_Fields, 'id' | 'user_id'>
        )>, var_pop?: Maybe<(
          { __typename?: 'Project_var_pop_fields' }
          & Pick<IProject_Var_Pop_Fields, 'id' | 'user_id'>
        )>, var_samp?: Maybe<(
          { __typename?: 'Project_var_samp_fields' }
          & Pick<IProject_Var_Samp_Fields, 'id' | 'user_id'>
        )>, variance?: Maybe<(
          { __typename?: 'Project_variance_fields' }
          & Pick<IProject_Variance_Fields, 'id' | 'user_id'>
        )> }
      )>, nodes: Array<(
        { __typename?: 'Project' }
        & Pick<IProject, 'id' | 'name' | 'user_id'>
        & { Tasks: Array<(
          { __typename?: 'Task' }
          & Pick<ITask, 'id' | 'name' | 'project_id'>
        )> }
      )> }
    ) }
  )> }
);


export const ProjectQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectUserProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectUserProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectUserProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectUserProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]};

/**
 * __useProjectQueryQuery__
 *
 * To run a query within a React component, call `useProjectQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQueryQuery({
 *   variables: {
 *      distinctOn: // value for 'distinctOn'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      projectTasksDistinctOn: // value for 'projectTasksDistinctOn'
 *      projectTasksLimit: // value for 'projectTasksLimit'
 *      projectTasksOffset: // value for 'projectTasksOffset'
 *      projectTasksOrderBy: // value for 'projectTasksOrderBy'
 *      projectTasksWhere: // value for 'projectTasksWhere'
 *      projectTasksAggregateDistinctOn: // value for 'projectTasksAggregateDistinctOn'
 *      projectTasksAggregateLimit: // value for 'projectTasksAggregateLimit'
 *      projectTasksAggregateOffset: // value for 'projectTasksAggregateOffset'
 *      projectTasksAggregateOrderBy: // value for 'projectTasksAggregateOrderBy'
 *      projectTasksAggregateWhere: // value for 'projectTasksAggregateWhere'
 *      projectTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'projectTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      projectUserUserProjectsAggregateDistinctOn: // value for 'projectUserUserProjectsAggregateDistinctOn'
 *      projectUserUserProjectsAggregateLimit: // value for 'projectUserUserProjectsAggregateLimit'
 *      projectUserUserProjectsAggregateOffset: // value for 'projectUserUserProjectsAggregateOffset'
 *      projectUserUserProjectsAggregateOrderBy: // value for 'projectUserUserProjectsAggregateOrderBy'
 *      projectUserUserProjectsAggregateWhere: // value for 'projectUserUserProjectsAggregateWhere'
 *      projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeProjectTasks: // value for 'includeProjectTasks'
 *      includeProjectTasksAggregate: // value for 'includeProjectTasksAggregate'
 *      includeProjectTasksAggregateAggregate: // value for 'includeProjectTasksAggregateAggregate'
 *      includeProjectTasksAggregateAggregateAvg: // value for 'includeProjectTasksAggregateAggregateAvg'
 *      includeProjectTasksAggregateAggregateMax: // value for 'includeProjectTasksAggregateAggregateMax'
 *      includeProjectTasksAggregateAggregateMin: // value for 'includeProjectTasksAggregateAggregateMin'
 *      includeProjectTasksAggregateAggregateStddev: // value for 'includeProjectTasksAggregateAggregateStddev'
 *      includeProjectTasksAggregateAggregateStddevPop: // value for 'includeProjectTasksAggregateAggregateStddevPop'
 *      includeProjectTasksAggregateAggregateStddevSamp: // value for 'includeProjectTasksAggregateAggregateStddevSamp'
 *      includeProjectTasksAggregateAggregateSum: // value for 'includeProjectTasksAggregateAggregateSum'
 *      includeProjectTasksAggregateAggregateVarPop: // value for 'includeProjectTasksAggregateAggregateVarPop'
 *      includeProjectTasksAggregateAggregateVarSamp: // value for 'includeProjectTasksAggregateAggregateVarSamp'
 *      includeProjectTasksAggregateAggregateVariance: // value for 'includeProjectTasksAggregateAggregateVariance'
 *      includeProjectTasksAggregateNodes: // value for 'includeProjectTasksAggregateNodes'
 *      includeProjectUser: // value for 'includeProjectUser'
 *      includeProjectUserProjectsAggregate: // value for 'includeProjectUserProjectsAggregate'
 *      includeProjectUserProjectsAggregateAggregate: // value for 'includeProjectUserProjectsAggregateAggregate'
 *   },
 * });
 */
export function useProjectQueryQuery(baseOptions?: Apollo.QueryHookOptions<IProjectQueryQuery, IProjectQueryQueryVariables>) {
        return Apollo.useQuery<IProjectQueryQuery, IProjectQueryQueryVariables>(ProjectQueryDocument, baseOptions);
      }
export function useProjectQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IProjectQueryQuery, IProjectQueryQueryVariables>) {
          return Apollo.useLazyQuery<IProjectQueryQuery, IProjectQueryQueryVariables>(ProjectQueryDocument, baseOptions);
        }
export type ProjectQueryQueryHookResult = ReturnType<typeof useProjectQueryQuery>;
export type ProjectQueryLazyQueryHookResult = ReturnType<typeof useProjectQueryLazyQuery>;
export type ProjectQueryQueryResult = Apollo.QueryResult<IProjectQueryQuery, IProjectQueryQueryVariables>;
export const ProjectAggregateQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectAggregateQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectAggregateNodesUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]}}]};

/**
 * __useProjectAggregateQueryQuery__
 *
 * To run a query within a React component, call `useProjectAggregateQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectAggregateQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectAggregateQueryQuery({
 *   variables: {
 *      distinctOn: // value for 'distinctOn'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      projectAggregateAggregateAggregateCountColumns: // value for 'projectAggregateAggregateAggregateCountColumns'
 *      projectAggregateAggregateAggregateCountDistinct: // value for 'projectAggregateAggregateAggregateCountDistinct'
 *      projectAggregateNodesNodesTasksDistinctOn: // value for 'projectAggregateNodesNodesTasksDistinctOn'
 *      projectAggregateNodesNodesTasksLimit: // value for 'projectAggregateNodesNodesTasksLimit'
 *      projectAggregateNodesNodesTasksOffset: // value for 'projectAggregateNodesNodesTasksOffset'
 *      projectAggregateNodesNodesTasksOrderBy: // value for 'projectAggregateNodesNodesTasksOrderBy'
 *      projectAggregateNodesNodesTasksWhere: // value for 'projectAggregateNodesNodesTasksWhere'
 *      projectAggregateNodesNodesTasksAggregateDistinctOn: // value for 'projectAggregateNodesNodesTasksAggregateDistinctOn'
 *      projectAggregateNodesNodesTasksAggregateLimit: // value for 'projectAggregateNodesNodesTasksAggregateLimit'
 *      projectAggregateNodesNodesTasksAggregateOffset: // value for 'projectAggregateNodesNodesTasksAggregateOffset'
 *      projectAggregateNodesNodesTasksAggregateOrderBy: // value for 'projectAggregateNodesNodesTasksAggregateOrderBy'
 *      projectAggregateNodesNodesTasksAggregateWhere: // value for 'projectAggregateNodesNodesTasksAggregateWhere'
 *      projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeProjectAggregateAggregate: // value for 'includeProjectAggregateAggregate'
 *      includeProjectAggregateAggregateAvg: // value for 'includeProjectAggregateAggregateAvg'
 *      includeProjectAggregateAggregateMax: // value for 'includeProjectAggregateAggregateMax'
 *      includeProjectAggregateAggregateMin: // value for 'includeProjectAggregateAggregateMin'
 *      includeProjectAggregateAggregateStddev: // value for 'includeProjectAggregateAggregateStddev'
 *      includeProjectAggregateAggregateStddevPop: // value for 'includeProjectAggregateAggregateStddevPop'
 *      includeProjectAggregateAggregateStddevSamp: // value for 'includeProjectAggregateAggregateStddevSamp'
 *      includeProjectAggregateAggregateSum: // value for 'includeProjectAggregateAggregateSum'
 *      includeProjectAggregateAggregateVarPop: // value for 'includeProjectAggregateAggregateVarPop'
 *      includeProjectAggregateAggregateVarSamp: // value for 'includeProjectAggregateAggregateVarSamp'
 *      includeProjectAggregateAggregateVariance: // value for 'includeProjectAggregateAggregateVariance'
 *      includeProjectAggregateNodes: // value for 'includeProjectAggregateNodes'
 *      includeProjectAggregateNodesTasks: // value for 'includeProjectAggregateNodesTasks'
 *      includeProjectAggregateNodesTasksAggregate: // value for 'includeProjectAggregateNodesTasksAggregate'
 *      includeProjectAggregateNodesTasksAggregateAggregate: // value for 'includeProjectAggregateNodesTasksAggregateAggregate'
 *      includeProjectAggregateNodesTasksAggregateNodes: // value for 'includeProjectAggregateNodesTasksAggregateNodes'
 *      includeProjectAggregateNodesUser: // value for 'includeProjectAggregateNodesUser'
 *   },
 * });
 */
export function useProjectAggregateQueryQuery(baseOptions?: Apollo.QueryHookOptions<IProjectAggregateQueryQuery, IProjectAggregateQueryQueryVariables>) {
        return Apollo.useQuery<IProjectAggregateQueryQuery, IProjectAggregateQueryQueryVariables>(ProjectAggregateQueryDocument, baseOptions);
      }
export function useProjectAggregateQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IProjectAggregateQueryQuery, IProjectAggregateQueryQueryVariables>) {
          return Apollo.useLazyQuery<IProjectAggregateQueryQuery, IProjectAggregateQueryQueryVariables>(ProjectAggregateQueryDocument, baseOptions);
        }
export type ProjectAggregateQueryQueryHookResult = ReturnType<typeof useProjectAggregateQueryQuery>;
export type ProjectAggregateQueryLazyQueryHookResult = ReturnType<typeof useProjectAggregateQueryLazyQuery>;
export type ProjectAggregateQueryQueryResult = Apollo.QueryResult<IProjectAggregateQueryQuery, IProjectAggregateQueryQueryVariables>;
export const ProjectByPkQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectByPkQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkUserProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkUserProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkUserProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeProjectByPkUserProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]};

/**
 * __useProjectByPkQueryQuery__
 *
 * To run a query within a React component, call `useProjectByPkQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectByPkQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectByPkQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      projectByPkTasksDistinctOn: // value for 'projectByPkTasksDistinctOn'
 *      projectByPkTasksLimit: // value for 'projectByPkTasksLimit'
 *      projectByPkTasksOffset: // value for 'projectByPkTasksOffset'
 *      projectByPkTasksOrderBy: // value for 'projectByPkTasksOrderBy'
 *      projectByPkTasksWhere: // value for 'projectByPkTasksWhere'
 *      projectByPkTasksAggregateDistinctOn: // value for 'projectByPkTasksAggregateDistinctOn'
 *      projectByPkTasksAggregateLimit: // value for 'projectByPkTasksAggregateLimit'
 *      projectByPkTasksAggregateOffset: // value for 'projectByPkTasksAggregateOffset'
 *      projectByPkTasksAggregateOrderBy: // value for 'projectByPkTasksAggregateOrderBy'
 *      projectByPkTasksAggregateWhere: // value for 'projectByPkTasksAggregateWhere'
 *      projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      projectByPkUserUserProjectsAggregateDistinctOn: // value for 'projectByPkUserUserProjectsAggregateDistinctOn'
 *      projectByPkUserUserProjectsAggregateLimit: // value for 'projectByPkUserUserProjectsAggregateLimit'
 *      projectByPkUserUserProjectsAggregateOffset: // value for 'projectByPkUserUserProjectsAggregateOffset'
 *      projectByPkUserUserProjectsAggregateOrderBy: // value for 'projectByPkUserUserProjectsAggregateOrderBy'
 *      projectByPkUserUserProjectsAggregateWhere: // value for 'projectByPkUserUserProjectsAggregateWhere'
 *      projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeProjectByPkTasks: // value for 'includeProjectByPkTasks'
 *      includeProjectByPkTasksAggregate: // value for 'includeProjectByPkTasksAggregate'
 *      includeProjectByPkTasksAggregateAggregate: // value for 'includeProjectByPkTasksAggregateAggregate'
 *      includeProjectByPkTasksAggregateAggregateAvg: // value for 'includeProjectByPkTasksAggregateAggregateAvg'
 *      includeProjectByPkTasksAggregateAggregateMax: // value for 'includeProjectByPkTasksAggregateAggregateMax'
 *      includeProjectByPkTasksAggregateAggregateMin: // value for 'includeProjectByPkTasksAggregateAggregateMin'
 *      includeProjectByPkTasksAggregateAggregateStddev: // value for 'includeProjectByPkTasksAggregateAggregateStddev'
 *      includeProjectByPkTasksAggregateAggregateStddevPop: // value for 'includeProjectByPkTasksAggregateAggregateStddevPop'
 *      includeProjectByPkTasksAggregateAggregateStddevSamp: // value for 'includeProjectByPkTasksAggregateAggregateStddevSamp'
 *      includeProjectByPkTasksAggregateAggregateSum: // value for 'includeProjectByPkTasksAggregateAggregateSum'
 *      includeProjectByPkTasksAggregateAggregateVarPop: // value for 'includeProjectByPkTasksAggregateAggregateVarPop'
 *      includeProjectByPkTasksAggregateAggregateVarSamp: // value for 'includeProjectByPkTasksAggregateAggregateVarSamp'
 *      includeProjectByPkTasksAggregateAggregateVariance: // value for 'includeProjectByPkTasksAggregateAggregateVariance'
 *      includeProjectByPkTasksAggregateNodes: // value for 'includeProjectByPkTasksAggregateNodes'
 *      includeProjectByPkUser: // value for 'includeProjectByPkUser'
 *      includeProjectByPkUserProjectsAggregate: // value for 'includeProjectByPkUserProjectsAggregate'
 *      includeProjectByPkUserProjectsAggregateAggregate: // value for 'includeProjectByPkUserProjectsAggregateAggregate'
 *   },
 * });
 */
export function useProjectByPkQueryQuery(baseOptions: Apollo.QueryHookOptions<IProjectByPkQueryQuery, IProjectByPkQueryQueryVariables>) {
        return Apollo.useQuery<IProjectByPkQueryQuery, IProjectByPkQueryQueryVariables>(ProjectByPkQueryDocument, baseOptions);
      }
export function useProjectByPkQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IProjectByPkQueryQuery, IProjectByPkQueryQueryVariables>) {
          return Apollo.useLazyQuery<IProjectByPkQueryQuery, IProjectByPkQueryQueryVariables>(ProjectByPkQueryDocument, baseOptions);
        }
export type ProjectByPkQueryQueryHookResult = ReturnType<typeof useProjectByPkQueryQuery>;
export type ProjectByPkQueryLazyQueryHookResult = ReturnType<typeof useProjectByPkQueryLazyQuery>;
export type ProjectByPkQueryQueryResult = Apollo.QueryResult<IProjectByPkQueryQuery, IProjectByPkQueryQueryVariables>;
export const TaskQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"taskQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProjectTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProjectTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Task"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProjectTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProjectTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]};

/**
 * __useTaskQueryQuery__
 *
 * To run a query within a React component, call `useTaskQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQueryQuery({
 *   variables: {
 *      distinctOn: // value for 'distinctOn'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      taskProjectProjectTasksAggregateDistinctOn: // value for 'taskProjectProjectTasksAggregateDistinctOn'
 *      taskProjectProjectTasksAggregateLimit: // value for 'taskProjectProjectTasksAggregateLimit'
 *      taskProjectProjectTasksAggregateOffset: // value for 'taskProjectProjectTasksAggregateOffset'
 *      taskProjectProjectTasksAggregateOrderBy: // value for 'taskProjectProjectTasksAggregateOrderBy'
 *      taskProjectProjectTasksAggregateWhere: // value for 'taskProjectProjectTasksAggregateWhere'
 *      taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeTaskProject: // value for 'includeTaskProject'
 *      includeTaskProjectTasksAggregate: // value for 'includeTaskProjectTasksAggregate'
 *      includeTaskProjectTasksAggregateAggregate: // value for 'includeTaskProjectTasksAggregateAggregate'
 *      includeTaskProjectUser: // value for 'includeTaskProjectUser'
 *   },
 * });
 */
export function useTaskQueryQuery(baseOptions?: Apollo.QueryHookOptions<ITaskQueryQuery, ITaskQueryQueryVariables>) {
        return Apollo.useQuery<ITaskQueryQuery, ITaskQueryQueryVariables>(TaskQueryDocument, baseOptions);
      }
export function useTaskQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskQueryQuery, ITaskQueryQueryVariables>) {
          return Apollo.useLazyQuery<ITaskQueryQuery, ITaskQueryQueryVariables>(TaskQueryDocument, baseOptions);
        }
export type TaskQueryQueryHookResult = ReturnType<typeof useTaskQueryQuery>;
export type TaskQueryLazyQueryHookResult = ReturnType<typeof useTaskQueryLazyQuery>;
export type TaskQueryQueryResult = Apollo.QueryResult<ITaskQueryQuery, ITaskQueryQueryVariables>;
export const TaskAggregateQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"taskAggregateQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateNodesProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateNodesProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Task_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateNodesProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskAggregateNodesProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]}}]};

/**
 * __useTaskAggregateQueryQuery__
 *
 * To run a query within a React component, call `useTaskAggregateQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskAggregateQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskAggregateQueryQuery({
 *   variables: {
 *      distinctOn: // value for 'distinctOn'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      taskAggregateAggregateAggregateCountColumns: // value for 'taskAggregateAggregateAggregateCountColumns'
 *      taskAggregateAggregateAggregateCountDistinct: // value for 'taskAggregateAggregateAggregateCountDistinct'
 *      includeTaskAggregateAggregate: // value for 'includeTaskAggregateAggregate'
 *      includeTaskAggregateAggregateAvg: // value for 'includeTaskAggregateAggregateAvg'
 *      includeTaskAggregateAggregateMax: // value for 'includeTaskAggregateAggregateMax'
 *      includeTaskAggregateAggregateMin: // value for 'includeTaskAggregateAggregateMin'
 *      includeTaskAggregateAggregateStddev: // value for 'includeTaskAggregateAggregateStddev'
 *      includeTaskAggregateAggregateStddevPop: // value for 'includeTaskAggregateAggregateStddevPop'
 *      includeTaskAggregateAggregateStddevSamp: // value for 'includeTaskAggregateAggregateStddevSamp'
 *      includeTaskAggregateAggregateSum: // value for 'includeTaskAggregateAggregateSum'
 *      includeTaskAggregateAggregateVarPop: // value for 'includeTaskAggregateAggregateVarPop'
 *      includeTaskAggregateAggregateVarSamp: // value for 'includeTaskAggregateAggregateVarSamp'
 *      includeTaskAggregateAggregateVariance: // value for 'includeTaskAggregateAggregateVariance'
 *      includeTaskAggregateNodes: // value for 'includeTaskAggregateNodes'
 *      includeTaskAggregateNodesProject: // value for 'includeTaskAggregateNodesProject'
 *      includeTaskAggregateNodesProjectUser: // value for 'includeTaskAggregateNodesProjectUser'
 *   },
 * });
 */
export function useTaskAggregateQueryQuery(baseOptions?: Apollo.QueryHookOptions<ITaskAggregateQueryQuery, ITaskAggregateQueryQueryVariables>) {
        return Apollo.useQuery<ITaskAggregateQueryQuery, ITaskAggregateQueryQueryVariables>(TaskAggregateQueryDocument, baseOptions);
      }
export function useTaskAggregateQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskAggregateQueryQuery, ITaskAggregateQueryQueryVariables>) {
          return Apollo.useLazyQuery<ITaskAggregateQueryQuery, ITaskAggregateQueryQueryVariables>(TaskAggregateQueryDocument, baseOptions);
        }
export type TaskAggregateQueryQueryHookResult = ReturnType<typeof useTaskAggregateQueryQuery>;
export type TaskAggregateQueryLazyQueryHookResult = ReturnType<typeof useTaskAggregateQueryLazyQuery>;
export type TaskAggregateQueryQueryResult = Apollo.QueryResult<ITaskAggregateQueryQuery, ITaskAggregateQueryQueryVariables>;
export const TaskByPkQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"taskByPkQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProjectTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProjectTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Task_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProjectTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProjectTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTaskByPkProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]};

/**
 * __useTaskByPkQueryQuery__
 *
 * To run a query within a React component, call `useTaskByPkQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskByPkQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskByPkQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      taskByPkProjectProjectTasksAggregateDistinctOn: // value for 'taskByPkProjectProjectTasksAggregateDistinctOn'
 *      taskByPkProjectProjectTasksAggregateLimit: // value for 'taskByPkProjectProjectTasksAggregateLimit'
 *      taskByPkProjectProjectTasksAggregateOffset: // value for 'taskByPkProjectProjectTasksAggregateOffset'
 *      taskByPkProjectProjectTasksAggregateOrderBy: // value for 'taskByPkProjectProjectTasksAggregateOrderBy'
 *      taskByPkProjectProjectTasksAggregateWhere: // value for 'taskByPkProjectProjectTasksAggregateWhere'
 *      taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeTaskByPkProject: // value for 'includeTaskByPkProject'
 *      includeTaskByPkProjectTasksAggregate: // value for 'includeTaskByPkProjectTasksAggregate'
 *      includeTaskByPkProjectTasksAggregateAggregate: // value for 'includeTaskByPkProjectTasksAggregateAggregate'
 *      includeTaskByPkProjectUser: // value for 'includeTaskByPkProjectUser'
 *   },
 * });
 */
export function useTaskByPkQueryQuery(baseOptions: Apollo.QueryHookOptions<ITaskByPkQueryQuery, ITaskByPkQueryQueryVariables>) {
        return Apollo.useQuery<ITaskByPkQueryQuery, ITaskByPkQueryQueryVariables>(TaskByPkQueryDocument, baseOptions);
      }
export function useTaskByPkQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskByPkQueryQuery, ITaskByPkQueryQueryVariables>) {
          return Apollo.useLazyQuery<ITaskByPkQueryQuery, ITaskByPkQueryQueryVariables>(TaskByPkQueryDocument, baseOptions);
        }
export type TaskByPkQueryQueryHookResult = ReturnType<typeof useTaskByPkQueryQuery>;
export type TaskByPkQueryLazyQueryHookResult = ReturnType<typeof useTaskByPkQueryLazyQuery>;
export type TaskByPkQueryQueryResult = Apollo.QueryResult<ITaskByPkQueryQuery, ITaskByPkQueryQueryVariables>;
export const UserQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateNodesTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserProjectsAggregateNodesTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useUserQueryQuery__
 *
 * To run a query within a React component, call `useUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQueryQuery({
 *   variables: {
 *      distinctOn: // value for 'distinctOn'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      userProjectsDistinctOn: // value for 'userProjectsDistinctOn'
 *      userProjectsLimit: // value for 'userProjectsLimit'
 *      userProjectsOffset: // value for 'userProjectsOffset'
 *      userProjectsOrderBy: // value for 'userProjectsOrderBy'
 *      userProjectsWhere: // value for 'userProjectsWhere'
 *      userProjectsProjectsTasksDistinctOn: // value for 'userProjectsProjectsTasksDistinctOn'
 *      userProjectsProjectsTasksLimit: // value for 'userProjectsProjectsTasksLimit'
 *      userProjectsProjectsTasksOffset: // value for 'userProjectsProjectsTasksOffset'
 *      userProjectsProjectsTasksOrderBy: // value for 'userProjectsProjectsTasksOrderBy'
 *      userProjectsProjectsTasksWhere: // value for 'userProjectsProjectsTasksWhere'
 *      userProjectsProjectsTasksAggregateDistinctOn: // value for 'userProjectsProjectsTasksAggregateDistinctOn'
 *      userProjectsProjectsTasksAggregateLimit: // value for 'userProjectsProjectsTasksAggregateLimit'
 *      userProjectsProjectsTasksAggregateOffset: // value for 'userProjectsProjectsTasksAggregateOffset'
 *      userProjectsProjectsTasksAggregateOrderBy: // value for 'userProjectsProjectsTasksAggregateOrderBy'
 *      userProjectsProjectsTasksAggregateWhere: // value for 'userProjectsProjectsTasksAggregateWhere'
 *      userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      userProjectsAggregateDistinctOn: // value for 'userProjectsAggregateDistinctOn'
 *      userProjectsAggregateLimit: // value for 'userProjectsAggregateLimit'
 *      userProjectsAggregateOffset: // value for 'userProjectsAggregateOffset'
 *      userProjectsAggregateOrderBy: // value for 'userProjectsAggregateOrderBy'
 *      userProjectsAggregateWhere: // value for 'userProjectsAggregateWhere'
 *      userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: // value for 'userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn'
 *      userProjectsAggregateProjectsAggregateNodesNodesTasksLimit: // value for 'userProjectsAggregateProjectsAggregateNodesNodesTasksLimit'
 *      userProjectsAggregateProjectsAggregateNodesNodesTasksOffset: // value for 'userProjectsAggregateProjectsAggregateNodesNodesTasksOffset'
 *      userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: // value for 'userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy'
 *      userProjectsAggregateProjectsAggregateNodesNodesTasksWhere: // value for 'userProjectsAggregateProjectsAggregateNodesNodesTasksWhere'
 *      includeUserProjects: // value for 'includeUserProjects'
 *      includeUserProjectsTasks: // value for 'includeUserProjectsTasks'
 *      includeUserProjectsTasksAggregate: // value for 'includeUserProjectsTasksAggregate'
 *      includeUserProjectsTasksAggregateAggregate: // value for 'includeUserProjectsTasksAggregateAggregate'
 *      includeUserProjectsTasksAggregateNodes: // value for 'includeUserProjectsTasksAggregateNodes'
 *      includeUserProjectsAggregate: // value for 'includeUserProjectsAggregate'
 *      includeUserProjectsAggregateAggregate: // value for 'includeUserProjectsAggregateAggregate'
 *      includeUserProjectsAggregateAggregateAvg: // value for 'includeUserProjectsAggregateAggregateAvg'
 *      includeUserProjectsAggregateAggregateMax: // value for 'includeUserProjectsAggregateAggregateMax'
 *      includeUserProjectsAggregateAggregateMin: // value for 'includeUserProjectsAggregateAggregateMin'
 *      includeUserProjectsAggregateAggregateStddev: // value for 'includeUserProjectsAggregateAggregateStddev'
 *      includeUserProjectsAggregateAggregateStddevPop: // value for 'includeUserProjectsAggregateAggregateStddevPop'
 *      includeUserProjectsAggregateAggregateStddevSamp: // value for 'includeUserProjectsAggregateAggregateStddevSamp'
 *      includeUserProjectsAggregateAggregateSum: // value for 'includeUserProjectsAggregateAggregateSum'
 *      includeUserProjectsAggregateAggregateVarPop: // value for 'includeUserProjectsAggregateAggregateVarPop'
 *      includeUserProjectsAggregateAggregateVarSamp: // value for 'includeUserProjectsAggregateAggregateVarSamp'
 *      includeUserProjectsAggregateAggregateVariance: // value for 'includeUserProjectsAggregateAggregateVariance'
 *      includeUserProjectsAggregateNodes: // value for 'includeUserProjectsAggregateNodes'
 *      includeUserProjectsAggregateNodesTasks: // value for 'includeUserProjectsAggregateNodesTasks'
 *   },
 * });
 */
export function useUserQueryQuery(baseOptions?: Apollo.QueryHookOptions<IUserQueryQuery, IUserQueryQueryVariables>) {
        return Apollo.useQuery<IUserQueryQuery, IUserQueryQueryVariables>(UserQueryDocument, baseOptions);
      }
export function useUserQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IUserQueryQuery, IUserQueryQueryVariables>) {
          return Apollo.useLazyQuery<IUserQueryQuery, IUserQueryQueryVariables>(UserQueryDocument, baseOptions);
        }
export type UserQueryQueryHookResult = ReturnType<typeof useUserQueryQuery>;
export type UserQueryLazyQueryHookResult = ReturnType<typeof useUserQueryLazyQuery>;
export type UserQueryQueryResult = Apollo.QueryResult<IUserQueryQuery, IUserQueryQueryVariables>;
export const UserAggregateQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userAggregateQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserAggregateNodesProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};

/**
 * __useUserAggregateQueryQuery__
 *
 * To run a query within a React component, call `useUserAggregateQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAggregateQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAggregateQueryQuery({
 *   variables: {
 *      distinctOn: // value for 'distinctOn'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      userAggregateAggregateAggregateCountColumns: // value for 'userAggregateAggregateAggregateCountColumns'
 *      userAggregateAggregateAggregateCountDistinct: // value for 'userAggregateAggregateAggregateCountDistinct'
 *      userAggregateNodesNodesProjectsDistinctOn: // value for 'userAggregateNodesNodesProjectsDistinctOn'
 *      userAggregateNodesNodesProjectsLimit: // value for 'userAggregateNodesNodesProjectsLimit'
 *      userAggregateNodesNodesProjectsOffset: // value for 'userAggregateNodesNodesProjectsOffset'
 *      userAggregateNodesNodesProjectsOrderBy: // value for 'userAggregateNodesNodesProjectsOrderBy'
 *      userAggregateNodesNodesProjectsWhere: // value for 'userAggregateNodesNodesProjectsWhere'
 *      userAggregateNodesNodesProjectsProjectsTasksDistinctOn: // value for 'userAggregateNodesNodesProjectsProjectsTasksDistinctOn'
 *      userAggregateNodesNodesProjectsProjectsTasksLimit: // value for 'userAggregateNodesNodesProjectsProjectsTasksLimit'
 *      userAggregateNodesNodesProjectsProjectsTasksOffset: // value for 'userAggregateNodesNodesProjectsProjectsTasksOffset'
 *      userAggregateNodesNodesProjectsProjectsTasksOrderBy: // value for 'userAggregateNodesNodesProjectsProjectsTasksOrderBy'
 *      userAggregateNodesNodesProjectsProjectsTasksWhere: // value for 'userAggregateNodesNodesProjectsProjectsTasksWhere'
 *      userAggregateNodesNodesProjectsAggregateDistinctOn: // value for 'userAggregateNodesNodesProjectsAggregateDistinctOn'
 *      userAggregateNodesNodesProjectsAggregateLimit: // value for 'userAggregateNodesNodesProjectsAggregateLimit'
 *      userAggregateNodesNodesProjectsAggregateOffset: // value for 'userAggregateNodesNodesProjectsAggregateOffset'
 *      userAggregateNodesNodesProjectsAggregateOrderBy: // value for 'userAggregateNodesNodesProjectsAggregateOrderBy'
 *      userAggregateNodesNodesProjectsAggregateWhere: // value for 'userAggregateNodesNodesProjectsAggregateWhere'
 *      userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeUserAggregateAggregate: // value for 'includeUserAggregateAggregate'
 *      includeUserAggregateAggregateAvg: // value for 'includeUserAggregateAggregateAvg'
 *      includeUserAggregateAggregateMax: // value for 'includeUserAggregateAggregateMax'
 *      includeUserAggregateAggregateMin: // value for 'includeUserAggregateAggregateMin'
 *      includeUserAggregateAggregateStddev: // value for 'includeUserAggregateAggregateStddev'
 *      includeUserAggregateAggregateStddevPop: // value for 'includeUserAggregateAggregateStddevPop'
 *      includeUserAggregateAggregateStddevSamp: // value for 'includeUserAggregateAggregateStddevSamp'
 *      includeUserAggregateAggregateSum: // value for 'includeUserAggregateAggregateSum'
 *      includeUserAggregateAggregateVarPop: // value for 'includeUserAggregateAggregateVarPop'
 *      includeUserAggregateAggregateVarSamp: // value for 'includeUserAggregateAggregateVarSamp'
 *      includeUserAggregateAggregateVariance: // value for 'includeUserAggregateAggregateVariance'
 *      includeUserAggregateNodes: // value for 'includeUserAggregateNodes'
 *      includeUserAggregateNodesProjects: // value for 'includeUserAggregateNodesProjects'
 *      includeUserAggregateNodesProjectsTasks: // value for 'includeUserAggregateNodesProjectsTasks'
 *      includeUserAggregateNodesProjectsAggregate: // value for 'includeUserAggregateNodesProjectsAggregate'
 *      includeUserAggregateNodesProjectsAggregateAggregate: // value for 'includeUserAggregateNodesProjectsAggregateAggregate'
 *      includeUserAggregateNodesProjectsAggregateNodes: // value for 'includeUserAggregateNodesProjectsAggregateNodes'
 *   },
 * });
 */
export function useUserAggregateQueryQuery(baseOptions?: Apollo.QueryHookOptions<IUserAggregateQueryQuery, IUserAggregateQueryQueryVariables>) {
        return Apollo.useQuery<IUserAggregateQueryQuery, IUserAggregateQueryQueryVariables>(UserAggregateQueryDocument, baseOptions);
      }
export function useUserAggregateQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IUserAggregateQueryQuery, IUserAggregateQueryQueryVariables>) {
          return Apollo.useLazyQuery<IUserAggregateQueryQuery, IUserAggregateQueryQueryVariables>(UserAggregateQueryDocument, baseOptions);
        }
export type UserAggregateQueryQueryHookResult = ReturnType<typeof useUserAggregateQueryQuery>;
export type UserAggregateQueryLazyQueryHookResult = ReturnType<typeof useUserAggregateQueryLazyQuery>;
export type UserAggregateQueryQueryResult = Apollo.QueryResult<IUserAggregateQueryQuery, IUserAggregateQueryQueryVariables>;
export const UserByPkQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userByPkQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateNodesTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUserByPkProjectsAggregateNodesTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useUserByPkQueryQuery__
 *
 * To run a query within a React component, call `useUserByPkQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByPkQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByPkQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      userByPkProjectsDistinctOn: // value for 'userByPkProjectsDistinctOn'
 *      userByPkProjectsLimit: // value for 'userByPkProjectsLimit'
 *      userByPkProjectsOffset: // value for 'userByPkProjectsOffset'
 *      userByPkProjectsOrderBy: // value for 'userByPkProjectsOrderBy'
 *      userByPkProjectsWhere: // value for 'userByPkProjectsWhere'
 *      userByPkProjectsProjectsTasksDistinctOn: // value for 'userByPkProjectsProjectsTasksDistinctOn'
 *      userByPkProjectsProjectsTasksLimit: // value for 'userByPkProjectsProjectsTasksLimit'
 *      userByPkProjectsProjectsTasksOffset: // value for 'userByPkProjectsProjectsTasksOffset'
 *      userByPkProjectsProjectsTasksOrderBy: // value for 'userByPkProjectsProjectsTasksOrderBy'
 *      userByPkProjectsProjectsTasksWhere: // value for 'userByPkProjectsProjectsTasksWhere'
 *      userByPkProjectsProjectsTasksAggregateDistinctOn: // value for 'userByPkProjectsProjectsTasksAggregateDistinctOn'
 *      userByPkProjectsProjectsTasksAggregateLimit: // value for 'userByPkProjectsProjectsTasksAggregateLimit'
 *      userByPkProjectsProjectsTasksAggregateOffset: // value for 'userByPkProjectsProjectsTasksAggregateOffset'
 *      userByPkProjectsProjectsTasksAggregateOrderBy: // value for 'userByPkProjectsProjectsTasksAggregateOrderBy'
 *      userByPkProjectsProjectsTasksAggregateWhere: // value for 'userByPkProjectsProjectsTasksAggregateWhere'
 *      userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      userByPkProjectsAggregateDistinctOn: // value for 'userByPkProjectsAggregateDistinctOn'
 *      userByPkProjectsAggregateLimit: // value for 'userByPkProjectsAggregateLimit'
 *      userByPkProjectsAggregateOffset: // value for 'userByPkProjectsAggregateOffset'
 *      userByPkProjectsAggregateOrderBy: // value for 'userByPkProjectsAggregateOrderBy'
 *      userByPkProjectsAggregateWhere: // value for 'userByPkProjectsAggregateWhere'
 *      userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: // value for 'userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn'
 *      userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: // value for 'userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit'
 *      userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: // value for 'userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset'
 *      userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: // value for 'userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy'
 *      userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: // value for 'userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere'
 *      includeUserByPkProjects: // value for 'includeUserByPkProjects'
 *      includeUserByPkProjectsTasks: // value for 'includeUserByPkProjectsTasks'
 *      includeUserByPkProjectsTasksAggregate: // value for 'includeUserByPkProjectsTasksAggregate'
 *      includeUserByPkProjectsTasksAggregateAggregate: // value for 'includeUserByPkProjectsTasksAggregateAggregate'
 *      includeUserByPkProjectsTasksAggregateNodes: // value for 'includeUserByPkProjectsTasksAggregateNodes'
 *      includeUserByPkProjectsAggregate: // value for 'includeUserByPkProjectsAggregate'
 *      includeUserByPkProjectsAggregateAggregate: // value for 'includeUserByPkProjectsAggregateAggregate'
 *      includeUserByPkProjectsAggregateAggregateAvg: // value for 'includeUserByPkProjectsAggregateAggregateAvg'
 *      includeUserByPkProjectsAggregateAggregateMax: // value for 'includeUserByPkProjectsAggregateAggregateMax'
 *      includeUserByPkProjectsAggregateAggregateMin: // value for 'includeUserByPkProjectsAggregateAggregateMin'
 *      includeUserByPkProjectsAggregateAggregateStddev: // value for 'includeUserByPkProjectsAggregateAggregateStddev'
 *      includeUserByPkProjectsAggregateAggregateStddevPop: // value for 'includeUserByPkProjectsAggregateAggregateStddevPop'
 *      includeUserByPkProjectsAggregateAggregateStddevSamp: // value for 'includeUserByPkProjectsAggregateAggregateStddevSamp'
 *      includeUserByPkProjectsAggregateAggregateSum: // value for 'includeUserByPkProjectsAggregateAggregateSum'
 *      includeUserByPkProjectsAggregateAggregateVarPop: // value for 'includeUserByPkProjectsAggregateAggregateVarPop'
 *      includeUserByPkProjectsAggregateAggregateVarSamp: // value for 'includeUserByPkProjectsAggregateAggregateVarSamp'
 *      includeUserByPkProjectsAggregateAggregateVariance: // value for 'includeUserByPkProjectsAggregateAggregateVariance'
 *      includeUserByPkProjectsAggregateNodes: // value for 'includeUserByPkProjectsAggregateNodes'
 *      includeUserByPkProjectsAggregateNodesTasks: // value for 'includeUserByPkProjectsAggregateNodesTasks'
 *   },
 * });
 */
export function useUserByPkQueryQuery(baseOptions: Apollo.QueryHookOptions<IUserByPkQueryQuery, IUserByPkQueryQueryVariables>) {
        return Apollo.useQuery<IUserByPkQueryQuery, IUserByPkQueryQueryVariables>(UserByPkQueryDocument, baseOptions);
      }
export function useUserByPkQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IUserByPkQueryQuery, IUserByPkQueryQueryVariables>) {
          return Apollo.useLazyQuery<IUserByPkQueryQuery, IUserByPkQueryQueryVariables>(UserByPkQueryDocument, baseOptions);
        }
export type UserByPkQueryQueryHookResult = ReturnType<typeof useUserByPkQueryQuery>;
export type UserByPkQueryLazyQueryHookResult = ReturnType<typeof useUserByPkQueryLazyQuery>;
export type UserByPkQueryQueryResult = Apollo.QueryResult<IUserByPkQueryQuery, IUserByPkQueryQueryVariables>;
export const DeleteProjectMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProjectMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectReturningUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]}}]};
export type IDeleteProjectMutationMutationFn = Apollo.MutationFunction<IDeleteProjectMutationMutation, IDeleteProjectMutationMutationVariables>;

/**
 * __useDeleteProjectMutationMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutationMutation, { data, loading, error }] = useDeleteProjectMutationMutation({
 *   variables: {
 *      where: // value for 'where'
 *      deleteProjectReturningReturningTasksDistinctOn: // value for 'deleteProjectReturningReturningTasksDistinctOn'
 *      deleteProjectReturningReturningTasksLimit: // value for 'deleteProjectReturningReturningTasksLimit'
 *      deleteProjectReturningReturningTasksOffset: // value for 'deleteProjectReturningReturningTasksOffset'
 *      deleteProjectReturningReturningTasksOrderBy: // value for 'deleteProjectReturningReturningTasksOrderBy'
 *      deleteProjectReturningReturningTasksWhere: // value for 'deleteProjectReturningReturningTasksWhere'
 *      deleteProjectReturningReturningTasksAggregateDistinctOn: // value for 'deleteProjectReturningReturningTasksAggregateDistinctOn'
 *      deleteProjectReturningReturningTasksAggregateLimit: // value for 'deleteProjectReturningReturningTasksAggregateLimit'
 *      deleteProjectReturningReturningTasksAggregateOffset: // value for 'deleteProjectReturningReturningTasksAggregateOffset'
 *      deleteProjectReturningReturningTasksAggregateOrderBy: // value for 'deleteProjectReturningReturningTasksAggregateOrderBy'
 *      deleteProjectReturningReturningTasksAggregateWhere: // value for 'deleteProjectReturningReturningTasksAggregateWhere'
 *      deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeDeleteProjectReturning: // value for 'includeDeleteProjectReturning'
 *      includeDeleteProjectReturningTasks: // value for 'includeDeleteProjectReturningTasks'
 *      includeDeleteProjectReturningTasksAggregate: // value for 'includeDeleteProjectReturningTasksAggregate'
 *      includeDeleteProjectReturningTasksAggregateAggregate: // value for 'includeDeleteProjectReturningTasksAggregateAggregate'
 *      includeDeleteProjectReturningTasksAggregateNodes: // value for 'includeDeleteProjectReturningTasksAggregateNodes'
 *      includeDeleteProjectReturningUser: // value for 'includeDeleteProjectReturningUser'
 *   },
 * });
 */
export function useDeleteProjectMutationMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteProjectMutationMutation, IDeleteProjectMutationMutationVariables>) {
        return Apollo.useMutation<IDeleteProjectMutationMutation, IDeleteProjectMutationMutationVariables>(DeleteProjectMutationDocument, baseOptions);
      }
export type DeleteProjectMutationMutationHookResult = ReturnType<typeof useDeleteProjectMutationMutation>;
export type DeleteProjectMutationMutationResult = Apollo.MutationResult<IDeleteProjectMutationMutation>;
export type DeleteProjectMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteProjectMutationMutation, IDeleteProjectMutationMutationVariables>;
export const DeleteProjectByPkMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProjectByPkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkUserProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkUserProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Project_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkUserProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteProjectByPkUserProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]};
export type IDeleteProjectByPkMutationMutationFn = Apollo.MutationFunction<IDeleteProjectByPkMutationMutation, IDeleteProjectByPkMutationMutationVariables>;

/**
 * __useDeleteProjectByPkMutationMutation__
 *
 * To run a mutation, you first call `useDeleteProjectByPkMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectByPkMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectByPkMutationMutation, { data, loading, error }] = useDeleteProjectByPkMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      deleteProjectByPkTasksDistinctOn: // value for 'deleteProjectByPkTasksDistinctOn'
 *      deleteProjectByPkTasksLimit: // value for 'deleteProjectByPkTasksLimit'
 *      deleteProjectByPkTasksOffset: // value for 'deleteProjectByPkTasksOffset'
 *      deleteProjectByPkTasksOrderBy: // value for 'deleteProjectByPkTasksOrderBy'
 *      deleteProjectByPkTasksWhere: // value for 'deleteProjectByPkTasksWhere'
 *      deleteProjectByPkTasksAggregateDistinctOn: // value for 'deleteProjectByPkTasksAggregateDistinctOn'
 *      deleteProjectByPkTasksAggregateLimit: // value for 'deleteProjectByPkTasksAggregateLimit'
 *      deleteProjectByPkTasksAggregateOffset: // value for 'deleteProjectByPkTasksAggregateOffset'
 *      deleteProjectByPkTasksAggregateOrderBy: // value for 'deleteProjectByPkTasksAggregateOrderBy'
 *      deleteProjectByPkTasksAggregateWhere: // value for 'deleteProjectByPkTasksAggregateWhere'
 *      deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      deleteProjectByPkUserUserProjectsAggregateDistinctOn: // value for 'deleteProjectByPkUserUserProjectsAggregateDistinctOn'
 *      deleteProjectByPkUserUserProjectsAggregateLimit: // value for 'deleteProjectByPkUserUserProjectsAggregateLimit'
 *      deleteProjectByPkUserUserProjectsAggregateOffset: // value for 'deleteProjectByPkUserUserProjectsAggregateOffset'
 *      deleteProjectByPkUserUserProjectsAggregateOrderBy: // value for 'deleteProjectByPkUserUserProjectsAggregateOrderBy'
 *      deleteProjectByPkUserUserProjectsAggregateWhere: // value for 'deleteProjectByPkUserUserProjectsAggregateWhere'
 *      deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeDeleteProjectByPkTasks: // value for 'includeDeleteProjectByPkTasks'
 *      includeDeleteProjectByPkTasksAggregate: // value for 'includeDeleteProjectByPkTasksAggregate'
 *      includeDeleteProjectByPkTasksAggregateAggregate: // value for 'includeDeleteProjectByPkTasksAggregateAggregate'
 *      includeDeleteProjectByPkTasksAggregateAggregateAvg: // value for 'includeDeleteProjectByPkTasksAggregateAggregateAvg'
 *      includeDeleteProjectByPkTasksAggregateAggregateMax: // value for 'includeDeleteProjectByPkTasksAggregateAggregateMax'
 *      includeDeleteProjectByPkTasksAggregateAggregateMin: // value for 'includeDeleteProjectByPkTasksAggregateAggregateMin'
 *      includeDeleteProjectByPkTasksAggregateAggregateStddev: // value for 'includeDeleteProjectByPkTasksAggregateAggregateStddev'
 *      includeDeleteProjectByPkTasksAggregateAggregateStddevPop: // value for 'includeDeleteProjectByPkTasksAggregateAggregateStddevPop'
 *      includeDeleteProjectByPkTasksAggregateAggregateStddevSamp: // value for 'includeDeleteProjectByPkTasksAggregateAggregateStddevSamp'
 *      includeDeleteProjectByPkTasksAggregateAggregateSum: // value for 'includeDeleteProjectByPkTasksAggregateAggregateSum'
 *      includeDeleteProjectByPkTasksAggregateAggregateVarPop: // value for 'includeDeleteProjectByPkTasksAggregateAggregateVarPop'
 *      includeDeleteProjectByPkTasksAggregateAggregateVarSamp: // value for 'includeDeleteProjectByPkTasksAggregateAggregateVarSamp'
 *      includeDeleteProjectByPkTasksAggregateAggregateVariance: // value for 'includeDeleteProjectByPkTasksAggregateAggregateVariance'
 *      includeDeleteProjectByPkTasksAggregateNodes: // value for 'includeDeleteProjectByPkTasksAggregateNodes'
 *      includeDeleteProjectByPkUser: // value for 'includeDeleteProjectByPkUser'
 *      includeDeleteProjectByPkUserProjectsAggregate: // value for 'includeDeleteProjectByPkUserProjectsAggregate'
 *      includeDeleteProjectByPkUserProjectsAggregateAggregate: // value for 'includeDeleteProjectByPkUserProjectsAggregateAggregate'
 *   },
 * });
 */
export function useDeleteProjectByPkMutationMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteProjectByPkMutationMutation, IDeleteProjectByPkMutationMutationVariables>) {
        return Apollo.useMutation<IDeleteProjectByPkMutationMutation, IDeleteProjectByPkMutationMutationVariables>(DeleteProjectByPkMutationDocument, baseOptions);
      }
export type DeleteProjectByPkMutationMutationHookResult = ReturnType<typeof useDeleteProjectByPkMutationMutation>;
export type DeleteProjectByPkMutationMutationResult = Apollo.MutationResult<IDeleteProjectByPkMutationMutation>;
export type DeleteProjectByPkMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteProjectByPkMutationMutation, IDeleteProjectByPkMutationMutationVariables>;
export const DeleteTaskMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTaskMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskReturningProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskReturningProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Task"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskReturningProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskReturningProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]}}]};
export type IDeleteTaskMutationMutationFn = Apollo.MutationFunction<IDeleteTaskMutationMutation, IDeleteTaskMutationMutationVariables>;

/**
 * __useDeleteTaskMutationMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutationMutation, { data, loading, error }] = useDeleteTaskMutationMutation({
 *   variables: {
 *      where: // value for 'where'
 *      includeDeleteTaskReturning: // value for 'includeDeleteTaskReturning'
 *      includeDeleteTaskReturningProject: // value for 'includeDeleteTaskReturningProject'
 *      includeDeleteTaskReturningProjectUser: // value for 'includeDeleteTaskReturningProjectUser'
 *   },
 * });
 */
export function useDeleteTaskMutationMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteTaskMutationMutation, IDeleteTaskMutationMutationVariables>) {
        return Apollo.useMutation<IDeleteTaskMutationMutation, IDeleteTaskMutationMutationVariables>(DeleteTaskMutationDocument, baseOptions);
      }
export type DeleteTaskMutationMutationHookResult = ReturnType<typeof useDeleteTaskMutationMutation>;
export type DeleteTaskMutationMutationResult = Apollo.MutationResult<IDeleteTaskMutationMutation>;
export type DeleteTaskMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteTaskMutationMutation, IDeleteTaskMutationMutationVariables>;
export const DeleteTaskByPkMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTaskByPkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProjectTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProjectTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Task_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProjectTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProjectTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteTaskByPkProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]};
export type IDeleteTaskByPkMutationMutationFn = Apollo.MutationFunction<IDeleteTaskByPkMutationMutation, IDeleteTaskByPkMutationMutationVariables>;

/**
 * __useDeleteTaskByPkMutationMutation__
 *
 * To run a mutation, you first call `useDeleteTaskByPkMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskByPkMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskByPkMutationMutation, { data, loading, error }] = useDeleteTaskByPkMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      deleteTaskByPkProjectProjectTasksAggregateDistinctOn: // value for 'deleteTaskByPkProjectProjectTasksAggregateDistinctOn'
 *      deleteTaskByPkProjectProjectTasksAggregateLimit: // value for 'deleteTaskByPkProjectProjectTasksAggregateLimit'
 *      deleteTaskByPkProjectProjectTasksAggregateOffset: // value for 'deleteTaskByPkProjectProjectTasksAggregateOffset'
 *      deleteTaskByPkProjectProjectTasksAggregateOrderBy: // value for 'deleteTaskByPkProjectProjectTasksAggregateOrderBy'
 *      deleteTaskByPkProjectProjectTasksAggregateWhere: // value for 'deleteTaskByPkProjectProjectTasksAggregateWhere'
 *      deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeDeleteTaskByPkProject: // value for 'includeDeleteTaskByPkProject'
 *      includeDeleteTaskByPkProjectTasksAggregate: // value for 'includeDeleteTaskByPkProjectTasksAggregate'
 *      includeDeleteTaskByPkProjectTasksAggregateAggregate: // value for 'includeDeleteTaskByPkProjectTasksAggregateAggregate'
 *      includeDeleteTaskByPkProjectUser: // value for 'includeDeleteTaskByPkProjectUser'
 *   },
 * });
 */
export function useDeleteTaskByPkMutationMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteTaskByPkMutationMutation, IDeleteTaskByPkMutationMutationVariables>) {
        return Apollo.useMutation<IDeleteTaskByPkMutationMutation, IDeleteTaskByPkMutationMutationVariables>(DeleteTaskByPkMutationDocument, baseOptions);
      }
export type DeleteTaskByPkMutationMutationHookResult = ReturnType<typeof useDeleteTaskByPkMutationMutation>;
export type DeleteTaskByPkMutationMutationResult = Apollo.MutationResult<IDeleteTaskByPkMutationMutation>;
export type DeleteTaskByPkMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteTaskByPkMutationMutation, IDeleteTaskByPkMutationMutationVariables>;
export const DeleteUserMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserReturningProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export type IDeleteUserMutationMutationFn = Apollo.MutationFunction<IDeleteUserMutationMutation, IDeleteUserMutationMutationVariables>;

/**
 * __useDeleteUserMutationMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutationMutation, { data, loading, error }] = useDeleteUserMutationMutation({
 *   variables: {
 *      where: // value for 'where'
 *      deleteUserReturningReturningProjectsDistinctOn: // value for 'deleteUserReturningReturningProjectsDistinctOn'
 *      deleteUserReturningReturningProjectsLimit: // value for 'deleteUserReturningReturningProjectsLimit'
 *      deleteUserReturningReturningProjectsOffset: // value for 'deleteUserReturningReturningProjectsOffset'
 *      deleteUserReturningReturningProjectsOrderBy: // value for 'deleteUserReturningReturningProjectsOrderBy'
 *      deleteUserReturningReturningProjectsWhere: // value for 'deleteUserReturningReturningProjectsWhere'
 *      deleteUserReturningReturningProjectsProjectsTasksDistinctOn: // value for 'deleteUserReturningReturningProjectsProjectsTasksDistinctOn'
 *      deleteUserReturningReturningProjectsProjectsTasksLimit: // value for 'deleteUserReturningReturningProjectsProjectsTasksLimit'
 *      deleteUserReturningReturningProjectsProjectsTasksOffset: // value for 'deleteUserReturningReturningProjectsProjectsTasksOffset'
 *      deleteUserReturningReturningProjectsProjectsTasksOrderBy: // value for 'deleteUserReturningReturningProjectsProjectsTasksOrderBy'
 *      deleteUserReturningReturningProjectsProjectsTasksWhere: // value for 'deleteUserReturningReturningProjectsProjectsTasksWhere'
 *      deleteUserReturningReturningProjectsAggregateDistinctOn: // value for 'deleteUserReturningReturningProjectsAggregateDistinctOn'
 *      deleteUserReturningReturningProjectsAggregateLimit: // value for 'deleteUserReturningReturningProjectsAggregateLimit'
 *      deleteUserReturningReturningProjectsAggregateOffset: // value for 'deleteUserReturningReturningProjectsAggregateOffset'
 *      deleteUserReturningReturningProjectsAggregateOrderBy: // value for 'deleteUserReturningReturningProjectsAggregateOrderBy'
 *      deleteUserReturningReturningProjectsAggregateWhere: // value for 'deleteUserReturningReturningProjectsAggregateWhere'
 *      deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeDeleteUserReturning: // value for 'includeDeleteUserReturning'
 *      includeDeleteUserReturningProjects: // value for 'includeDeleteUserReturningProjects'
 *      includeDeleteUserReturningProjectsTasks: // value for 'includeDeleteUserReturningProjectsTasks'
 *      includeDeleteUserReturningProjectsAggregate: // value for 'includeDeleteUserReturningProjectsAggregate'
 *      includeDeleteUserReturningProjectsAggregateAggregate: // value for 'includeDeleteUserReturningProjectsAggregateAggregate'
 *      includeDeleteUserReturningProjectsAggregateNodes: // value for 'includeDeleteUserReturningProjectsAggregateNodes'
 *   },
 * });
 */
export function useDeleteUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteUserMutationMutation, IDeleteUserMutationMutationVariables>) {
        return Apollo.useMutation<IDeleteUserMutationMutation, IDeleteUserMutationMutationVariables>(DeleteUserMutationDocument, baseOptions);
      }
export type DeleteUserMutationMutationHookResult = ReturnType<typeof useDeleteUserMutationMutation>;
export type DeleteUserMutationMutationResult = Apollo.MutationResult<IDeleteUserMutationMutation>;
export type DeleteUserMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteUserMutationMutation, IDeleteUserMutationMutationVariables>;
export const DeleteUserByPkMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUserByPkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateNodesTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeDeleteUserByPkProjectsAggregateNodesTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};
export type IDeleteUserByPkMutationMutationFn = Apollo.MutationFunction<IDeleteUserByPkMutationMutation, IDeleteUserByPkMutationMutationVariables>;

/**
 * __useDeleteUserByPkMutationMutation__
 *
 * To run a mutation, you first call `useDeleteUserByPkMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByPkMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByPkMutationMutation, { data, loading, error }] = useDeleteUserByPkMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      deleteUserByPkProjectsDistinctOn: // value for 'deleteUserByPkProjectsDistinctOn'
 *      deleteUserByPkProjectsLimit: // value for 'deleteUserByPkProjectsLimit'
 *      deleteUserByPkProjectsOffset: // value for 'deleteUserByPkProjectsOffset'
 *      deleteUserByPkProjectsOrderBy: // value for 'deleteUserByPkProjectsOrderBy'
 *      deleteUserByPkProjectsWhere: // value for 'deleteUserByPkProjectsWhere'
 *      deleteUserByPkProjectsProjectsTasksDistinctOn: // value for 'deleteUserByPkProjectsProjectsTasksDistinctOn'
 *      deleteUserByPkProjectsProjectsTasksLimit: // value for 'deleteUserByPkProjectsProjectsTasksLimit'
 *      deleteUserByPkProjectsProjectsTasksOffset: // value for 'deleteUserByPkProjectsProjectsTasksOffset'
 *      deleteUserByPkProjectsProjectsTasksOrderBy: // value for 'deleteUserByPkProjectsProjectsTasksOrderBy'
 *      deleteUserByPkProjectsProjectsTasksWhere: // value for 'deleteUserByPkProjectsProjectsTasksWhere'
 *      deleteUserByPkProjectsProjectsTasksAggregateDistinctOn: // value for 'deleteUserByPkProjectsProjectsTasksAggregateDistinctOn'
 *      deleteUserByPkProjectsProjectsTasksAggregateLimit: // value for 'deleteUserByPkProjectsProjectsTasksAggregateLimit'
 *      deleteUserByPkProjectsProjectsTasksAggregateOffset: // value for 'deleteUserByPkProjectsProjectsTasksAggregateOffset'
 *      deleteUserByPkProjectsProjectsTasksAggregateOrderBy: // value for 'deleteUserByPkProjectsProjectsTasksAggregateOrderBy'
 *      deleteUserByPkProjectsProjectsTasksAggregateWhere: // value for 'deleteUserByPkProjectsProjectsTasksAggregateWhere'
 *      deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      deleteUserByPkProjectsAggregateDistinctOn: // value for 'deleteUserByPkProjectsAggregateDistinctOn'
 *      deleteUserByPkProjectsAggregateLimit: // value for 'deleteUserByPkProjectsAggregateLimit'
 *      deleteUserByPkProjectsAggregateOffset: // value for 'deleteUserByPkProjectsAggregateOffset'
 *      deleteUserByPkProjectsAggregateOrderBy: // value for 'deleteUserByPkProjectsAggregateOrderBy'
 *      deleteUserByPkProjectsAggregateWhere: // value for 'deleteUserByPkProjectsAggregateWhere'
 *      deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: // value for 'deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn'
 *      deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: // value for 'deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit'
 *      deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: // value for 'deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset'
 *      deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: // value for 'deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy'
 *      deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: // value for 'deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere'
 *      includeDeleteUserByPkProjects: // value for 'includeDeleteUserByPkProjects'
 *      includeDeleteUserByPkProjectsTasks: // value for 'includeDeleteUserByPkProjectsTasks'
 *      includeDeleteUserByPkProjectsTasksAggregate: // value for 'includeDeleteUserByPkProjectsTasksAggregate'
 *      includeDeleteUserByPkProjectsTasksAggregateAggregate: // value for 'includeDeleteUserByPkProjectsTasksAggregateAggregate'
 *      includeDeleteUserByPkProjectsTasksAggregateNodes: // value for 'includeDeleteUserByPkProjectsTasksAggregateNodes'
 *      includeDeleteUserByPkProjectsAggregate: // value for 'includeDeleteUserByPkProjectsAggregate'
 *      includeDeleteUserByPkProjectsAggregateAggregate: // value for 'includeDeleteUserByPkProjectsAggregateAggregate'
 *      includeDeleteUserByPkProjectsAggregateAggregateAvg: // value for 'includeDeleteUserByPkProjectsAggregateAggregateAvg'
 *      includeDeleteUserByPkProjectsAggregateAggregateMax: // value for 'includeDeleteUserByPkProjectsAggregateAggregateMax'
 *      includeDeleteUserByPkProjectsAggregateAggregateMin: // value for 'includeDeleteUserByPkProjectsAggregateAggregateMin'
 *      includeDeleteUserByPkProjectsAggregateAggregateStddev: // value for 'includeDeleteUserByPkProjectsAggregateAggregateStddev'
 *      includeDeleteUserByPkProjectsAggregateAggregateStddevPop: // value for 'includeDeleteUserByPkProjectsAggregateAggregateStddevPop'
 *      includeDeleteUserByPkProjectsAggregateAggregateStddevSamp: // value for 'includeDeleteUserByPkProjectsAggregateAggregateStddevSamp'
 *      includeDeleteUserByPkProjectsAggregateAggregateSum: // value for 'includeDeleteUserByPkProjectsAggregateAggregateSum'
 *      includeDeleteUserByPkProjectsAggregateAggregateVarPop: // value for 'includeDeleteUserByPkProjectsAggregateAggregateVarPop'
 *      includeDeleteUserByPkProjectsAggregateAggregateVarSamp: // value for 'includeDeleteUserByPkProjectsAggregateAggregateVarSamp'
 *      includeDeleteUserByPkProjectsAggregateAggregateVariance: // value for 'includeDeleteUserByPkProjectsAggregateAggregateVariance'
 *      includeDeleteUserByPkProjectsAggregateNodes: // value for 'includeDeleteUserByPkProjectsAggregateNodes'
 *      includeDeleteUserByPkProjectsAggregateNodesTasks: // value for 'includeDeleteUserByPkProjectsAggregateNodesTasks'
 *   },
 * });
 */
export function useDeleteUserByPkMutationMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteUserByPkMutationMutation, IDeleteUserByPkMutationMutationVariables>) {
        return Apollo.useMutation<IDeleteUserByPkMutationMutation, IDeleteUserByPkMutationMutationVariables>(DeleteUserByPkMutationDocument, baseOptions);
      }
export type DeleteUserByPkMutationMutationHookResult = ReturnType<typeof useDeleteUserByPkMutationMutation>;
export type DeleteUserByPkMutationMutationResult = Apollo.MutationResult<IDeleteUserByPkMutationMutation>;
export type DeleteUserByPkMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteUserByPkMutationMutation, IDeleteUserByPkMutationMutationVariables>;
export const InsertProjectMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertProjectMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_on_conflict"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectReturningUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]}}]};
export type IInsertProjectMutationMutationFn = Apollo.MutationFunction<IInsertProjectMutationMutation, IInsertProjectMutationMutationVariables>;

/**
 * __useInsertProjectMutationMutation__
 *
 * To run a mutation, you first call `useInsertProjectMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProjectMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProjectMutationMutation, { data, loading, error }] = useInsertProjectMutationMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *      insertProjectReturningReturningTasksDistinctOn: // value for 'insertProjectReturningReturningTasksDistinctOn'
 *      insertProjectReturningReturningTasksLimit: // value for 'insertProjectReturningReturningTasksLimit'
 *      insertProjectReturningReturningTasksOffset: // value for 'insertProjectReturningReturningTasksOffset'
 *      insertProjectReturningReturningTasksOrderBy: // value for 'insertProjectReturningReturningTasksOrderBy'
 *      insertProjectReturningReturningTasksWhere: // value for 'insertProjectReturningReturningTasksWhere'
 *      insertProjectReturningReturningTasksAggregateDistinctOn: // value for 'insertProjectReturningReturningTasksAggregateDistinctOn'
 *      insertProjectReturningReturningTasksAggregateLimit: // value for 'insertProjectReturningReturningTasksAggregateLimit'
 *      insertProjectReturningReturningTasksAggregateOffset: // value for 'insertProjectReturningReturningTasksAggregateOffset'
 *      insertProjectReturningReturningTasksAggregateOrderBy: // value for 'insertProjectReturningReturningTasksAggregateOrderBy'
 *      insertProjectReturningReturningTasksAggregateWhere: // value for 'insertProjectReturningReturningTasksAggregateWhere'
 *      insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeInsertProjectReturning: // value for 'includeInsertProjectReturning'
 *      includeInsertProjectReturningTasks: // value for 'includeInsertProjectReturningTasks'
 *      includeInsertProjectReturningTasksAggregate: // value for 'includeInsertProjectReturningTasksAggregate'
 *      includeInsertProjectReturningTasksAggregateAggregate: // value for 'includeInsertProjectReturningTasksAggregateAggregate'
 *      includeInsertProjectReturningTasksAggregateNodes: // value for 'includeInsertProjectReturningTasksAggregateNodes'
 *      includeInsertProjectReturningUser: // value for 'includeInsertProjectReturningUser'
 *   },
 * });
 */
export function useInsertProjectMutationMutation(baseOptions?: Apollo.MutationHookOptions<IInsertProjectMutationMutation, IInsertProjectMutationMutationVariables>) {
        return Apollo.useMutation<IInsertProjectMutationMutation, IInsertProjectMutationMutationVariables>(InsertProjectMutationDocument, baseOptions);
      }
export type InsertProjectMutationMutationHookResult = ReturnType<typeof useInsertProjectMutationMutation>;
export type InsertProjectMutationMutationResult = Apollo.MutationResult<IInsertProjectMutationMutation>;
export type InsertProjectMutationMutationOptions = Apollo.BaseMutationOptions<IInsertProjectMutationMutation, IInsertProjectMutationMutationVariables>;
export const InsertProjectOneMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertProjectOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_on_conflict"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneUserProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneUserProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Project_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneUserProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertProjectOneUserProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]};
export type IInsertProjectOneMutationMutationFn = Apollo.MutationFunction<IInsertProjectOneMutationMutation, IInsertProjectOneMutationMutationVariables>;

/**
 * __useInsertProjectOneMutationMutation__
 *
 * To run a mutation, you first call `useInsertProjectOneMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProjectOneMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProjectOneMutationMutation, { data, loading, error }] = useInsertProjectOneMutationMutation({
 *   variables: {
 *      object: // value for 'object'
 *      onConflict: // value for 'onConflict'
 *      insertProjectOneTasksDistinctOn: // value for 'insertProjectOneTasksDistinctOn'
 *      insertProjectOneTasksLimit: // value for 'insertProjectOneTasksLimit'
 *      insertProjectOneTasksOffset: // value for 'insertProjectOneTasksOffset'
 *      insertProjectOneTasksOrderBy: // value for 'insertProjectOneTasksOrderBy'
 *      insertProjectOneTasksWhere: // value for 'insertProjectOneTasksWhere'
 *      insertProjectOneTasksAggregateDistinctOn: // value for 'insertProjectOneTasksAggregateDistinctOn'
 *      insertProjectOneTasksAggregateLimit: // value for 'insertProjectOneTasksAggregateLimit'
 *      insertProjectOneTasksAggregateOffset: // value for 'insertProjectOneTasksAggregateOffset'
 *      insertProjectOneTasksAggregateOrderBy: // value for 'insertProjectOneTasksAggregateOrderBy'
 *      insertProjectOneTasksAggregateWhere: // value for 'insertProjectOneTasksAggregateWhere'
 *      insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      insertProjectOneUserUserProjectsAggregateDistinctOn: // value for 'insertProjectOneUserUserProjectsAggregateDistinctOn'
 *      insertProjectOneUserUserProjectsAggregateLimit: // value for 'insertProjectOneUserUserProjectsAggregateLimit'
 *      insertProjectOneUserUserProjectsAggregateOffset: // value for 'insertProjectOneUserUserProjectsAggregateOffset'
 *      insertProjectOneUserUserProjectsAggregateOrderBy: // value for 'insertProjectOneUserUserProjectsAggregateOrderBy'
 *      insertProjectOneUserUserProjectsAggregateWhere: // value for 'insertProjectOneUserUserProjectsAggregateWhere'
 *      insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeInsertProjectOneTasks: // value for 'includeInsertProjectOneTasks'
 *      includeInsertProjectOneTasksAggregate: // value for 'includeInsertProjectOneTasksAggregate'
 *      includeInsertProjectOneTasksAggregateAggregate: // value for 'includeInsertProjectOneTasksAggregateAggregate'
 *      includeInsertProjectOneTasksAggregateAggregateAvg: // value for 'includeInsertProjectOneTasksAggregateAggregateAvg'
 *      includeInsertProjectOneTasksAggregateAggregateMax: // value for 'includeInsertProjectOneTasksAggregateAggregateMax'
 *      includeInsertProjectOneTasksAggregateAggregateMin: // value for 'includeInsertProjectOneTasksAggregateAggregateMin'
 *      includeInsertProjectOneTasksAggregateAggregateStddev: // value for 'includeInsertProjectOneTasksAggregateAggregateStddev'
 *      includeInsertProjectOneTasksAggregateAggregateStddevPop: // value for 'includeInsertProjectOneTasksAggregateAggregateStddevPop'
 *      includeInsertProjectOneTasksAggregateAggregateStddevSamp: // value for 'includeInsertProjectOneTasksAggregateAggregateStddevSamp'
 *      includeInsertProjectOneTasksAggregateAggregateSum: // value for 'includeInsertProjectOneTasksAggregateAggregateSum'
 *      includeInsertProjectOneTasksAggregateAggregateVarPop: // value for 'includeInsertProjectOneTasksAggregateAggregateVarPop'
 *      includeInsertProjectOneTasksAggregateAggregateVarSamp: // value for 'includeInsertProjectOneTasksAggregateAggregateVarSamp'
 *      includeInsertProjectOneTasksAggregateAggregateVariance: // value for 'includeInsertProjectOneTasksAggregateAggregateVariance'
 *      includeInsertProjectOneTasksAggregateNodes: // value for 'includeInsertProjectOneTasksAggregateNodes'
 *      includeInsertProjectOneUser: // value for 'includeInsertProjectOneUser'
 *      includeInsertProjectOneUserProjectsAggregate: // value for 'includeInsertProjectOneUserProjectsAggregate'
 *      includeInsertProjectOneUserProjectsAggregateAggregate: // value for 'includeInsertProjectOneUserProjectsAggregateAggregate'
 *   },
 * });
 */
export function useInsertProjectOneMutationMutation(baseOptions?: Apollo.MutationHookOptions<IInsertProjectOneMutationMutation, IInsertProjectOneMutationMutationVariables>) {
        return Apollo.useMutation<IInsertProjectOneMutationMutation, IInsertProjectOneMutationMutationVariables>(InsertProjectOneMutationDocument, baseOptions);
      }
export type InsertProjectOneMutationMutationHookResult = ReturnType<typeof useInsertProjectOneMutationMutation>;
export type InsertProjectOneMutationMutationResult = Apollo.MutationResult<IInsertProjectOneMutationMutation>;
export type InsertProjectOneMutationMutationOptions = Apollo.BaseMutationOptions<IInsertProjectOneMutationMutation, IInsertProjectOneMutationMutationVariables>;
export const InsertTaskMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertTaskMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_on_conflict"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskReturningProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskReturningProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Task"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskReturningProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskReturningProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]}}]};
export type IInsertTaskMutationMutationFn = Apollo.MutationFunction<IInsertTaskMutationMutation, IInsertTaskMutationMutationVariables>;

/**
 * __useInsertTaskMutationMutation__
 *
 * To run a mutation, you first call `useInsertTaskMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTaskMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTaskMutationMutation, { data, loading, error }] = useInsertTaskMutationMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *      includeInsertTaskReturning: // value for 'includeInsertTaskReturning'
 *      includeInsertTaskReturningProject: // value for 'includeInsertTaskReturningProject'
 *      includeInsertTaskReturningProjectUser: // value for 'includeInsertTaskReturningProjectUser'
 *   },
 * });
 */
export function useInsertTaskMutationMutation(baseOptions?: Apollo.MutationHookOptions<IInsertTaskMutationMutation, IInsertTaskMutationMutationVariables>) {
        return Apollo.useMutation<IInsertTaskMutationMutation, IInsertTaskMutationMutationVariables>(InsertTaskMutationDocument, baseOptions);
      }
export type InsertTaskMutationMutationHookResult = ReturnType<typeof useInsertTaskMutationMutation>;
export type InsertTaskMutationMutationResult = Apollo.MutationResult<IInsertTaskMutationMutation>;
export type InsertTaskMutationMutationOptions = Apollo.BaseMutationOptions<IInsertTaskMutationMutation, IInsertTaskMutationMutationVariables>;
export const InsertTaskOneMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertTaskOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_on_conflict"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProjectTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProjectTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Task_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProjectTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProjectTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertTaskOneProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]};
export type IInsertTaskOneMutationMutationFn = Apollo.MutationFunction<IInsertTaskOneMutationMutation, IInsertTaskOneMutationMutationVariables>;

/**
 * __useInsertTaskOneMutationMutation__
 *
 * To run a mutation, you first call `useInsertTaskOneMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTaskOneMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTaskOneMutationMutation, { data, loading, error }] = useInsertTaskOneMutationMutation({
 *   variables: {
 *      object: // value for 'object'
 *      onConflict: // value for 'onConflict'
 *      insertTaskOneProjectProjectTasksAggregateDistinctOn: // value for 'insertTaskOneProjectProjectTasksAggregateDistinctOn'
 *      insertTaskOneProjectProjectTasksAggregateLimit: // value for 'insertTaskOneProjectProjectTasksAggregateLimit'
 *      insertTaskOneProjectProjectTasksAggregateOffset: // value for 'insertTaskOneProjectProjectTasksAggregateOffset'
 *      insertTaskOneProjectProjectTasksAggregateOrderBy: // value for 'insertTaskOneProjectProjectTasksAggregateOrderBy'
 *      insertTaskOneProjectProjectTasksAggregateWhere: // value for 'insertTaskOneProjectProjectTasksAggregateWhere'
 *      insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeInsertTaskOneProject: // value for 'includeInsertTaskOneProject'
 *      includeInsertTaskOneProjectTasksAggregate: // value for 'includeInsertTaskOneProjectTasksAggregate'
 *      includeInsertTaskOneProjectTasksAggregateAggregate: // value for 'includeInsertTaskOneProjectTasksAggregateAggregate'
 *      includeInsertTaskOneProjectUser: // value for 'includeInsertTaskOneProjectUser'
 *   },
 * });
 */
export function useInsertTaskOneMutationMutation(baseOptions?: Apollo.MutationHookOptions<IInsertTaskOneMutationMutation, IInsertTaskOneMutationMutationVariables>) {
        return Apollo.useMutation<IInsertTaskOneMutationMutation, IInsertTaskOneMutationMutationVariables>(InsertTaskOneMutationDocument, baseOptions);
      }
export type InsertTaskOneMutationMutationHookResult = ReturnType<typeof useInsertTaskOneMutationMutation>;
export type InsertTaskOneMutationMutationResult = Apollo.MutationResult<IInsertTaskOneMutationMutation>;
export type InsertTaskOneMutationMutationOptions = Apollo.BaseMutationOptions<IInsertTaskOneMutationMutation, IInsertTaskOneMutationMutationVariables>;
export const InsertUserMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_on_conflict"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserReturningProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export type IInsertUserMutationMutationFn = Apollo.MutationFunction<IInsertUserMutationMutation, IInsertUserMutationMutationVariables>;

/**
 * __useInsertUserMutationMutation__
 *
 * To run a mutation, you first call `useInsertUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutationMutation, { data, loading, error }] = useInsertUserMutationMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *      insertUserReturningReturningProjectsDistinctOn: // value for 'insertUserReturningReturningProjectsDistinctOn'
 *      insertUserReturningReturningProjectsLimit: // value for 'insertUserReturningReturningProjectsLimit'
 *      insertUserReturningReturningProjectsOffset: // value for 'insertUserReturningReturningProjectsOffset'
 *      insertUserReturningReturningProjectsOrderBy: // value for 'insertUserReturningReturningProjectsOrderBy'
 *      insertUserReturningReturningProjectsWhere: // value for 'insertUserReturningReturningProjectsWhere'
 *      insertUserReturningReturningProjectsProjectsTasksDistinctOn: // value for 'insertUserReturningReturningProjectsProjectsTasksDistinctOn'
 *      insertUserReturningReturningProjectsProjectsTasksLimit: // value for 'insertUserReturningReturningProjectsProjectsTasksLimit'
 *      insertUserReturningReturningProjectsProjectsTasksOffset: // value for 'insertUserReturningReturningProjectsProjectsTasksOffset'
 *      insertUserReturningReturningProjectsProjectsTasksOrderBy: // value for 'insertUserReturningReturningProjectsProjectsTasksOrderBy'
 *      insertUserReturningReturningProjectsProjectsTasksWhere: // value for 'insertUserReturningReturningProjectsProjectsTasksWhere'
 *      insertUserReturningReturningProjectsAggregateDistinctOn: // value for 'insertUserReturningReturningProjectsAggregateDistinctOn'
 *      insertUserReturningReturningProjectsAggregateLimit: // value for 'insertUserReturningReturningProjectsAggregateLimit'
 *      insertUserReturningReturningProjectsAggregateOffset: // value for 'insertUserReturningReturningProjectsAggregateOffset'
 *      insertUserReturningReturningProjectsAggregateOrderBy: // value for 'insertUserReturningReturningProjectsAggregateOrderBy'
 *      insertUserReturningReturningProjectsAggregateWhere: // value for 'insertUserReturningReturningProjectsAggregateWhere'
 *      insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeInsertUserReturning: // value for 'includeInsertUserReturning'
 *      includeInsertUserReturningProjects: // value for 'includeInsertUserReturningProjects'
 *      includeInsertUserReturningProjectsTasks: // value for 'includeInsertUserReturningProjectsTasks'
 *      includeInsertUserReturningProjectsAggregate: // value for 'includeInsertUserReturningProjectsAggregate'
 *      includeInsertUserReturningProjectsAggregateAggregate: // value for 'includeInsertUserReturningProjectsAggregateAggregate'
 *      includeInsertUserReturningProjectsAggregateNodes: // value for 'includeInsertUserReturningProjectsAggregateNodes'
 *   },
 * });
 */
export function useInsertUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<IInsertUserMutationMutation, IInsertUserMutationMutationVariables>) {
        return Apollo.useMutation<IInsertUserMutationMutation, IInsertUserMutationMutationVariables>(InsertUserMutationDocument, baseOptions);
      }
export type InsertUserMutationMutationHookResult = ReturnType<typeof useInsertUserMutationMutation>;
export type InsertUserMutationMutationResult = Apollo.MutationResult<IInsertUserMutationMutation>;
export type InsertUserMutationMutationOptions = Apollo.BaseMutationOptions<IInsertUserMutationMutation, IInsertUserMutationMutationVariables>;
export const InsertUserOneMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertUserOneMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_on_conflict"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateNodesTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_User_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeInsertUserOneProjectsAggregateNodesTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};
export type IInsertUserOneMutationMutationFn = Apollo.MutationFunction<IInsertUserOneMutationMutation, IInsertUserOneMutationMutationVariables>;

/**
 * __useInsertUserOneMutationMutation__
 *
 * To run a mutation, you first call `useInsertUserOneMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserOneMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserOneMutationMutation, { data, loading, error }] = useInsertUserOneMutationMutation({
 *   variables: {
 *      object: // value for 'object'
 *      onConflict: // value for 'onConflict'
 *      insertUserOneProjectsDistinctOn: // value for 'insertUserOneProjectsDistinctOn'
 *      insertUserOneProjectsLimit: // value for 'insertUserOneProjectsLimit'
 *      insertUserOneProjectsOffset: // value for 'insertUserOneProjectsOffset'
 *      insertUserOneProjectsOrderBy: // value for 'insertUserOneProjectsOrderBy'
 *      insertUserOneProjectsWhere: // value for 'insertUserOneProjectsWhere'
 *      insertUserOneProjectsProjectsTasksDistinctOn: // value for 'insertUserOneProjectsProjectsTasksDistinctOn'
 *      insertUserOneProjectsProjectsTasksLimit: // value for 'insertUserOneProjectsProjectsTasksLimit'
 *      insertUserOneProjectsProjectsTasksOffset: // value for 'insertUserOneProjectsProjectsTasksOffset'
 *      insertUserOneProjectsProjectsTasksOrderBy: // value for 'insertUserOneProjectsProjectsTasksOrderBy'
 *      insertUserOneProjectsProjectsTasksWhere: // value for 'insertUserOneProjectsProjectsTasksWhere'
 *      insertUserOneProjectsProjectsTasksAggregateDistinctOn: // value for 'insertUserOneProjectsProjectsTasksAggregateDistinctOn'
 *      insertUserOneProjectsProjectsTasksAggregateLimit: // value for 'insertUserOneProjectsProjectsTasksAggregateLimit'
 *      insertUserOneProjectsProjectsTasksAggregateOffset: // value for 'insertUserOneProjectsProjectsTasksAggregateOffset'
 *      insertUserOneProjectsProjectsTasksAggregateOrderBy: // value for 'insertUserOneProjectsProjectsTasksAggregateOrderBy'
 *      insertUserOneProjectsProjectsTasksAggregateWhere: // value for 'insertUserOneProjectsProjectsTasksAggregateWhere'
 *      insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      insertUserOneProjectsAggregateDistinctOn: // value for 'insertUserOneProjectsAggregateDistinctOn'
 *      insertUserOneProjectsAggregateLimit: // value for 'insertUserOneProjectsAggregateLimit'
 *      insertUserOneProjectsAggregateOffset: // value for 'insertUserOneProjectsAggregateOffset'
 *      insertUserOneProjectsAggregateOrderBy: // value for 'insertUserOneProjectsAggregateOrderBy'
 *      insertUserOneProjectsAggregateWhere: // value for 'insertUserOneProjectsAggregateWhere'
 *      insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: // value for 'insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn'
 *      insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit: // value for 'insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit'
 *      insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset: // value for 'insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset'
 *      insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: // value for 'insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy'
 *      insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere: // value for 'insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere'
 *      includeInsertUserOneProjects: // value for 'includeInsertUserOneProjects'
 *      includeInsertUserOneProjectsTasks: // value for 'includeInsertUserOneProjectsTasks'
 *      includeInsertUserOneProjectsTasksAggregate: // value for 'includeInsertUserOneProjectsTasksAggregate'
 *      includeInsertUserOneProjectsTasksAggregateAggregate: // value for 'includeInsertUserOneProjectsTasksAggregateAggregate'
 *      includeInsertUserOneProjectsTasksAggregateNodes: // value for 'includeInsertUserOneProjectsTasksAggregateNodes'
 *      includeInsertUserOneProjectsAggregate: // value for 'includeInsertUserOneProjectsAggregate'
 *      includeInsertUserOneProjectsAggregateAggregate: // value for 'includeInsertUserOneProjectsAggregateAggregate'
 *      includeInsertUserOneProjectsAggregateAggregateAvg: // value for 'includeInsertUserOneProjectsAggregateAggregateAvg'
 *      includeInsertUserOneProjectsAggregateAggregateMax: // value for 'includeInsertUserOneProjectsAggregateAggregateMax'
 *      includeInsertUserOneProjectsAggregateAggregateMin: // value for 'includeInsertUserOneProjectsAggregateAggregateMin'
 *      includeInsertUserOneProjectsAggregateAggregateStddev: // value for 'includeInsertUserOneProjectsAggregateAggregateStddev'
 *      includeInsertUserOneProjectsAggregateAggregateStddevPop: // value for 'includeInsertUserOneProjectsAggregateAggregateStddevPop'
 *      includeInsertUserOneProjectsAggregateAggregateStddevSamp: // value for 'includeInsertUserOneProjectsAggregateAggregateStddevSamp'
 *      includeInsertUserOneProjectsAggregateAggregateSum: // value for 'includeInsertUserOneProjectsAggregateAggregateSum'
 *      includeInsertUserOneProjectsAggregateAggregateVarPop: // value for 'includeInsertUserOneProjectsAggregateAggregateVarPop'
 *      includeInsertUserOneProjectsAggregateAggregateVarSamp: // value for 'includeInsertUserOneProjectsAggregateAggregateVarSamp'
 *      includeInsertUserOneProjectsAggregateAggregateVariance: // value for 'includeInsertUserOneProjectsAggregateAggregateVariance'
 *      includeInsertUserOneProjectsAggregateNodes: // value for 'includeInsertUserOneProjectsAggregateNodes'
 *      includeInsertUserOneProjectsAggregateNodesTasks: // value for 'includeInsertUserOneProjectsAggregateNodesTasks'
 *   },
 * });
 */
export function useInsertUserOneMutationMutation(baseOptions?: Apollo.MutationHookOptions<IInsertUserOneMutationMutation, IInsertUserOneMutationMutationVariables>) {
        return Apollo.useMutation<IInsertUserOneMutationMutation, IInsertUserOneMutationMutationVariables>(InsertUserOneMutationDocument, baseOptions);
      }
export type InsertUserOneMutationMutationHookResult = ReturnType<typeof useInsertUserOneMutationMutation>;
export type InsertUserOneMutationMutationResult = Apollo.MutationResult<IInsertUserOneMutationMutation>;
export type InsertUserOneMutationMutationOptions = Apollo.BaseMutationOptions<IInsertUserOneMutationMutation, IInsertUserOneMutationMutationVariables>;
export const UpdateProjectMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProjectMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectReturningUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]}}]};
export type IUpdateProjectMutationMutationFn = Apollo.MutationFunction<IUpdateProjectMutationMutation, IUpdateProjectMutationMutationVariables>;

/**
 * __useUpdateProjectMutationMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutationMutation, { data, loading, error }] = useUpdateProjectMutationMutation({
 *   variables: {
 *      inc: // value for 'inc'
 *      set: // value for 'set'
 *      where: // value for 'where'
 *      updateProjectReturningReturningTasksDistinctOn: // value for 'updateProjectReturningReturningTasksDistinctOn'
 *      updateProjectReturningReturningTasksLimit: // value for 'updateProjectReturningReturningTasksLimit'
 *      updateProjectReturningReturningTasksOffset: // value for 'updateProjectReturningReturningTasksOffset'
 *      updateProjectReturningReturningTasksOrderBy: // value for 'updateProjectReturningReturningTasksOrderBy'
 *      updateProjectReturningReturningTasksWhere: // value for 'updateProjectReturningReturningTasksWhere'
 *      updateProjectReturningReturningTasksAggregateDistinctOn: // value for 'updateProjectReturningReturningTasksAggregateDistinctOn'
 *      updateProjectReturningReturningTasksAggregateLimit: // value for 'updateProjectReturningReturningTasksAggregateLimit'
 *      updateProjectReturningReturningTasksAggregateOffset: // value for 'updateProjectReturningReturningTasksAggregateOffset'
 *      updateProjectReturningReturningTasksAggregateOrderBy: // value for 'updateProjectReturningReturningTasksAggregateOrderBy'
 *      updateProjectReturningReturningTasksAggregateWhere: // value for 'updateProjectReturningReturningTasksAggregateWhere'
 *      updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeUpdateProjectReturning: // value for 'includeUpdateProjectReturning'
 *      includeUpdateProjectReturningTasks: // value for 'includeUpdateProjectReturningTasks'
 *      includeUpdateProjectReturningTasksAggregate: // value for 'includeUpdateProjectReturningTasksAggregate'
 *      includeUpdateProjectReturningTasksAggregateAggregate: // value for 'includeUpdateProjectReturningTasksAggregateAggregate'
 *      includeUpdateProjectReturningTasksAggregateNodes: // value for 'includeUpdateProjectReturningTasksAggregateNodes'
 *      includeUpdateProjectReturningUser: // value for 'includeUpdateProjectReturningUser'
 *   },
 * });
 */
export function useUpdateProjectMutationMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateProjectMutationMutation, IUpdateProjectMutationMutationVariables>) {
        return Apollo.useMutation<IUpdateProjectMutationMutation, IUpdateProjectMutationMutationVariables>(UpdateProjectMutationDocument, baseOptions);
      }
export type UpdateProjectMutationMutationHookResult = ReturnType<typeof useUpdateProjectMutationMutation>;
export type UpdateProjectMutationMutationResult = Apollo.MutationResult<IUpdateProjectMutationMutation>;
export type UpdateProjectMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateProjectMutationMutation, IUpdateProjectMutationMutationVariables>;
export const UpdateProjectByPkMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProjectByPkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pkColumns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkUserProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkUserProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Project_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pkColumns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkUserProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateProjectByPkUserProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]};
export type IUpdateProjectByPkMutationMutationFn = Apollo.MutationFunction<IUpdateProjectByPkMutationMutation, IUpdateProjectByPkMutationMutationVariables>;

/**
 * __useUpdateProjectByPkMutationMutation__
 *
 * To run a mutation, you first call `useUpdateProjectByPkMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectByPkMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectByPkMutationMutation, { data, loading, error }] = useUpdateProjectByPkMutationMutation({
 *   variables: {
 *      inc: // value for 'inc'
 *      set: // value for 'set'
 *      pkColumns: // value for 'pkColumns'
 *      updateProjectByPkTasksDistinctOn: // value for 'updateProjectByPkTasksDistinctOn'
 *      updateProjectByPkTasksLimit: // value for 'updateProjectByPkTasksLimit'
 *      updateProjectByPkTasksOffset: // value for 'updateProjectByPkTasksOffset'
 *      updateProjectByPkTasksOrderBy: // value for 'updateProjectByPkTasksOrderBy'
 *      updateProjectByPkTasksWhere: // value for 'updateProjectByPkTasksWhere'
 *      updateProjectByPkTasksAggregateDistinctOn: // value for 'updateProjectByPkTasksAggregateDistinctOn'
 *      updateProjectByPkTasksAggregateLimit: // value for 'updateProjectByPkTasksAggregateLimit'
 *      updateProjectByPkTasksAggregateOffset: // value for 'updateProjectByPkTasksAggregateOffset'
 *      updateProjectByPkTasksAggregateOrderBy: // value for 'updateProjectByPkTasksAggregateOrderBy'
 *      updateProjectByPkTasksAggregateWhere: // value for 'updateProjectByPkTasksAggregateWhere'
 *      updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      updateProjectByPkUserUserProjectsAggregateDistinctOn: // value for 'updateProjectByPkUserUserProjectsAggregateDistinctOn'
 *      updateProjectByPkUserUserProjectsAggregateLimit: // value for 'updateProjectByPkUserUserProjectsAggregateLimit'
 *      updateProjectByPkUserUserProjectsAggregateOffset: // value for 'updateProjectByPkUserUserProjectsAggregateOffset'
 *      updateProjectByPkUserUserProjectsAggregateOrderBy: // value for 'updateProjectByPkUserUserProjectsAggregateOrderBy'
 *      updateProjectByPkUserUserProjectsAggregateWhere: // value for 'updateProjectByPkUserUserProjectsAggregateWhere'
 *      updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeUpdateProjectByPkTasks: // value for 'includeUpdateProjectByPkTasks'
 *      includeUpdateProjectByPkTasksAggregate: // value for 'includeUpdateProjectByPkTasksAggregate'
 *      includeUpdateProjectByPkTasksAggregateAggregate: // value for 'includeUpdateProjectByPkTasksAggregateAggregate'
 *      includeUpdateProjectByPkTasksAggregateAggregateAvg: // value for 'includeUpdateProjectByPkTasksAggregateAggregateAvg'
 *      includeUpdateProjectByPkTasksAggregateAggregateMax: // value for 'includeUpdateProjectByPkTasksAggregateAggregateMax'
 *      includeUpdateProjectByPkTasksAggregateAggregateMin: // value for 'includeUpdateProjectByPkTasksAggregateAggregateMin'
 *      includeUpdateProjectByPkTasksAggregateAggregateStddev: // value for 'includeUpdateProjectByPkTasksAggregateAggregateStddev'
 *      includeUpdateProjectByPkTasksAggregateAggregateStddevPop: // value for 'includeUpdateProjectByPkTasksAggregateAggregateStddevPop'
 *      includeUpdateProjectByPkTasksAggregateAggregateStddevSamp: // value for 'includeUpdateProjectByPkTasksAggregateAggregateStddevSamp'
 *      includeUpdateProjectByPkTasksAggregateAggregateSum: // value for 'includeUpdateProjectByPkTasksAggregateAggregateSum'
 *      includeUpdateProjectByPkTasksAggregateAggregateVarPop: // value for 'includeUpdateProjectByPkTasksAggregateAggregateVarPop'
 *      includeUpdateProjectByPkTasksAggregateAggregateVarSamp: // value for 'includeUpdateProjectByPkTasksAggregateAggregateVarSamp'
 *      includeUpdateProjectByPkTasksAggregateAggregateVariance: // value for 'includeUpdateProjectByPkTasksAggregateAggregateVariance'
 *      includeUpdateProjectByPkTasksAggregateNodes: // value for 'includeUpdateProjectByPkTasksAggregateNodes'
 *      includeUpdateProjectByPkUser: // value for 'includeUpdateProjectByPkUser'
 *      includeUpdateProjectByPkUserProjectsAggregate: // value for 'includeUpdateProjectByPkUserProjectsAggregate'
 *      includeUpdateProjectByPkUserProjectsAggregateAggregate: // value for 'includeUpdateProjectByPkUserProjectsAggregateAggregate'
 *   },
 * });
 */
export function useUpdateProjectByPkMutationMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateProjectByPkMutationMutation, IUpdateProjectByPkMutationMutationVariables>) {
        return Apollo.useMutation<IUpdateProjectByPkMutationMutation, IUpdateProjectByPkMutationMutationVariables>(UpdateProjectByPkMutationDocument, baseOptions);
      }
export type UpdateProjectByPkMutationMutationHookResult = ReturnType<typeof useUpdateProjectByPkMutationMutation>;
export type UpdateProjectByPkMutationMutationResult = Apollo.MutationResult<IUpdateProjectByPkMutationMutation>;
export type UpdateProjectByPkMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateProjectByPkMutationMutation, IUpdateProjectByPkMutationMutationVariables>;
export const UpdateTaskMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTaskMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskReturningProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskReturningProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Task"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskReturningProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskReturningProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]}}]};
export type IUpdateTaskMutationMutationFn = Apollo.MutationFunction<IUpdateTaskMutationMutation, IUpdateTaskMutationMutationVariables>;

/**
 * __useUpdateTaskMutationMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutationMutation, { data, loading, error }] = useUpdateTaskMutationMutation({
 *   variables: {
 *      inc: // value for 'inc'
 *      set: // value for 'set'
 *      where: // value for 'where'
 *      includeUpdateTaskReturning: // value for 'includeUpdateTaskReturning'
 *      includeUpdateTaskReturningProject: // value for 'includeUpdateTaskReturningProject'
 *      includeUpdateTaskReturningProjectUser: // value for 'includeUpdateTaskReturningProjectUser'
 *   },
 * });
 */
export function useUpdateTaskMutationMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateTaskMutationMutation, IUpdateTaskMutationMutationVariables>) {
        return Apollo.useMutation<IUpdateTaskMutationMutation, IUpdateTaskMutationMutationVariables>(UpdateTaskMutationDocument, baseOptions);
      }
export type UpdateTaskMutationMutationHookResult = ReturnType<typeof useUpdateTaskMutationMutation>;
export type UpdateTaskMutationMutationResult = Apollo.MutationResult<IUpdateTaskMutationMutation>;
export type UpdateTaskMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateTaskMutationMutation, IUpdateTaskMutationMutationVariables>;
export const UpdateTaskByPkMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTaskByPkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pkColumns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProjectTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProjectTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProjectUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Task_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pkColumns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Project"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProject"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProjectTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProjectTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateTaskByPkProjectUser"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}}]};
export type IUpdateTaskByPkMutationMutationFn = Apollo.MutationFunction<IUpdateTaskByPkMutationMutation, IUpdateTaskByPkMutationMutationVariables>;

/**
 * __useUpdateTaskByPkMutationMutation__
 *
 * To run a mutation, you first call `useUpdateTaskByPkMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskByPkMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskByPkMutationMutation, { data, loading, error }] = useUpdateTaskByPkMutationMutation({
 *   variables: {
 *      inc: // value for 'inc'
 *      set: // value for 'set'
 *      pkColumns: // value for 'pkColumns'
 *      updateTaskByPkProjectProjectTasksAggregateDistinctOn: // value for 'updateTaskByPkProjectProjectTasksAggregateDistinctOn'
 *      updateTaskByPkProjectProjectTasksAggregateLimit: // value for 'updateTaskByPkProjectProjectTasksAggregateLimit'
 *      updateTaskByPkProjectProjectTasksAggregateOffset: // value for 'updateTaskByPkProjectProjectTasksAggregateOffset'
 *      updateTaskByPkProjectProjectTasksAggregateOrderBy: // value for 'updateTaskByPkProjectProjectTasksAggregateOrderBy'
 *      updateTaskByPkProjectProjectTasksAggregateWhere: // value for 'updateTaskByPkProjectProjectTasksAggregateWhere'
 *      updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      includeUpdateTaskByPkProject: // value for 'includeUpdateTaskByPkProject'
 *      includeUpdateTaskByPkProjectTasksAggregate: // value for 'includeUpdateTaskByPkProjectTasksAggregate'
 *      includeUpdateTaskByPkProjectTasksAggregateAggregate: // value for 'includeUpdateTaskByPkProjectTasksAggregateAggregate'
 *      includeUpdateTaskByPkProjectUser: // value for 'includeUpdateTaskByPkProjectUser'
 *   },
 * });
 */
export function useUpdateTaskByPkMutationMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateTaskByPkMutationMutation, IUpdateTaskByPkMutationMutationVariables>) {
        return Apollo.useMutation<IUpdateTaskByPkMutationMutation, IUpdateTaskByPkMutationMutationVariables>(UpdateTaskByPkMutationDocument, baseOptions);
      }
export type UpdateTaskByPkMutationMutationHookResult = ReturnType<typeof useUpdateTaskByPkMutationMutation>;
export type UpdateTaskByPkMutationMutationResult = Apollo.MutationResult<IUpdateTaskByPkMutationMutation>;
export type UpdateTaskByPkMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateTaskByPkMutationMutation, IUpdateTaskByPkMutationMutationVariables>;
export const UpdateUserMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturning"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserReturningProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export type IUpdateUserMutationMutationFn = Apollo.MutationFunction<IUpdateUserMutationMutation, IUpdateUserMutationMutationVariables>;

/**
 * __useUpdateUserMutationMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutationMutation, { data, loading, error }] = useUpdateUserMutationMutation({
 *   variables: {
 *      inc: // value for 'inc'
 *      set: // value for 'set'
 *      where: // value for 'where'
 *      updateUserReturningReturningProjectsDistinctOn: // value for 'updateUserReturningReturningProjectsDistinctOn'
 *      updateUserReturningReturningProjectsLimit: // value for 'updateUserReturningReturningProjectsLimit'
 *      updateUserReturningReturningProjectsOffset: // value for 'updateUserReturningReturningProjectsOffset'
 *      updateUserReturningReturningProjectsOrderBy: // value for 'updateUserReturningReturningProjectsOrderBy'
 *      updateUserReturningReturningProjectsWhere: // value for 'updateUserReturningReturningProjectsWhere'
 *      updateUserReturningReturningProjectsProjectsTasksDistinctOn: // value for 'updateUserReturningReturningProjectsProjectsTasksDistinctOn'
 *      updateUserReturningReturningProjectsProjectsTasksLimit: // value for 'updateUserReturningReturningProjectsProjectsTasksLimit'
 *      updateUserReturningReturningProjectsProjectsTasksOffset: // value for 'updateUserReturningReturningProjectsProjectsTasksOffset'
 *      updateUserReturningReturningProjectsProjectsTasksOrderBy: // value for 'updateUserReturningReturningProjectsProjectsTasksOrderBy'
 *      updateUserReturningReturningProjectsProjectsTasksWhere: // value for 'updateUserReturningReturningProjectsProjectsTasksWhere'
 *      updateUserReturningReturningProjectsAggregateDistinctOn: // value for 'updateUserReturningReturningProjectsAggregateDistinctOn'
 *      updateUserReturningReturningProjectsAggregateLimit: // value for 'updateUserReturningReturningProjectsAggregateLimit'
 *      updateUserReturningReturningProjectsAggregateOffset: // value for 'updateUserReturningReturningProjectsAggregateOffset'
 *      updateUserReturningReturningProjectsAggregateOrderBy: // value for 'updateUserReturningReturningProjectsAggregateOrderBy'
 *      updateUserReturningReturningProjectsAggregateWhere: // value for 'updateUserReturningReturningProjectsAggregateWhere'
 *      updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      includeUpdateUserReturning: // value for 'includeUpdateUserReturning'
 *      includeUpdateUserReturningProjects: // value for 'includeUpdateUserReturningProjects'
 *      includeUpdateUserReturningProjectsTasks: // value for 'includeUpdateUserReturningProjectsTasks'
 *      includeUpdateUserReturningProjectsAggregate: // value for 'includeUpdateUserReturningProjectsAggregate'
 *      includeUpdateUserReturningProjectsAggregateAggregate: // value for 'includeUpdateUserReturningProjectsAggregateAggregate'
 *      includeUpdateUserReturningProjectsAggregateNodes: // value for 'includeUpdateUserReturningProjectsAggregateNodes'
 *   },
 * });
 */
export function useUpdateUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateUserMutationMutation, IUpdateUserMutationMutationVariables>) {
        return Apollo.useMutation<IUpdateUserMutationMutation, IUpdateUserMutationMutationVariables>(UpdateUserMutationDocument, baseOptions);
      }
export type UpdateUserMutationMutationHookResult = ReturnType<typeof useUpdateUserMutationMutation>;
export type UpdateUserMutationMutationResult = Apollo.MutationResult<IUpdateUserMutationMutation>;
export type UpdateUserMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateUserMutationMutation, IUpdateUserMutationMutationVariables>;
export const UpdateUserByPkMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserByPkMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"User_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pkColumns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Task_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjects"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasksAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasksAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasksAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateAvg"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateMax"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateMin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateStddev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateStddevPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateStddevSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateSum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateVarPop"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateVarSamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateVariance"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateNodes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateNodesTasks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pkColumns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjects"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Tasks_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasksAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasksAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsTasksAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Projects_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateAvg"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct"}}}]},{"kind":"Field","name":{"kind":"Name","value":"max"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateMax"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateMin"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateStddev"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateStddevPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stddev_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateStddevSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sum"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateSum"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_pop"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateVarPop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"var_samp"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateVarSamp"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variance"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateAggregateVariance"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateNodes"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeUpdateUserByPkProjectsAggregateNodesTasks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"project_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};
export type IUpdateUserByPkMutationMutationFn = Apollo.MutationFunction<IUpdateUserByPkMutationMutation, IUpdateUserByPkMutationMutationVariables>;

/**
 * __useUpdateUserByPkMutationMutation__
 *
 * To run a mutation, you first call `useUpdateUserByPkMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserByPkMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserByPkMutationMutation, { data, loading, error }] = useUpdateUserByPkMutationMutation({
 *   variables: {
 *      inc: // value for 'inc'
 *      set: // value for 'set'
 *      pkColumns: // value for 'pkColumns'
 *      updateUserByPkProjectsDistinctOn: // value for 'updateUserByPkProjectsDistinctOn'
 *      updateUserByPkProjectsLimit: // value for 'updateUserByPkProjectsLimit'
 *      updateUserByPkProjectsOffset: // value for 'updateUserByPkProjectsOffset'
 *      updateUserByPkProjectsOrderBy: // value for 'updateUserByPkProjectsOrderBy'
 *      updateUserByPkProjectsWhere: // value for 'updateUserByPkProjectsWhere'
 *      updateUserByPkProjectsProjectsTasksDistinctOn: // value for 'updateUserByPkProjectsProjectsTasksDistinctOn'
 *      updateUserByPkProjectsProjectsTasksLimit: // value for 'updateUserByPkProjectsProjectsTasksLimit'
 *      updateUserByPkProjectsProjectsTasksOffset: // value for 'updateUserByPkProjectsProjectsTasksOffset'
 *      updateUserByPkProjectsProjectsTasksOrderBy: // value for 'updateUserByPkProjectsProjectsTasksOrderBy'
 *      updateUserByPkProjectsProjectsTasksWhere: // value for 'updateUserByPkProjectsProjectsTasksWhere'
 *      updateUserByPkProjectsProjectsTasksAggregateDistinctOn: // value for 'updateUserByPkProjectsProjectsTasksAggregateDistinctOn'
 *      updateUserByPkProjectsProjectsTasksAggregateLimit: // value for 'updateUserByPkProjectsProjectsTasksAggregateLimit'
 *      updateUserByPkProjectsProjectsTasksAggregateOffset: // value for 'updateUserByPkProjectsProjectsTasksAggregateOffset'
 *      updateUserByPkProjectsProjectsTasksAggregateOrderBy: // value for 'updateUserByPkProjectsProjectsTasksAggregateOrderBy'
 *      updateUserByPkProjectsProjectsTasksAggregateWhere: // value for 'updateUserByPkProjectsProjectsTasksAggregateWhere'
 *      updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: // value for 'updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns'
 *      updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: // value for 'updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct'
 *      updateUserByPkProjectsAggregateDistinctOn: // value for 'updateUserByPkProjectsAggregateDistinctOn'
 *      updateUserByPkProjectsAggregateLimit: // value for 'updateUserByPkProjectsAggregateLimit'
 *      updateUserByPkProjectsAggregateOffset: // value for 'updateUserByPkProjectsAggregateOffset'
 *      updateUserByPkProjectsAggregateOrderBy: // value for 'updateUserByPkProjectsAggregateOrderBy'
 *      updateUserByPkProjectsAggregateWhere: // value for 'updateUserByPkProjectsAggregateWhere'
 *      updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: // value for 'updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns'
 *      updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: // value for 'updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct'
 *      updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: // value for 'updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn'
 *      updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: // value for 'updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit'
 *      updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: // value for 'updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset'
 *      updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: // value for 'updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy'
 *      updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: // value for 'updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere'
 *      includeUpdateUserByPkProjects: // value for 'includeUpdateUserByPkProjects'
 *      includeUpdateUserByPkProjectsTasks: // value for 'includeUpdateUserByPkProjectsTasks'
 *      includeUpdateUserByPkProjectsTasksAggregate: // value for 'includeUpdateUserByPkProjectsTasksAggregate'
 *      includeUpdateUserByPkProjectsTasksAggregateAggregate: // value for 'includeUpdateUserByPkProjectsTasksAggregateAggregate'
 *      includeUpdateUserByPkProjectsTasksAggregateNodes: // value for 'includeUpdateUserByPkProjectsTasksAggregateNodes'
 *      includeUpdateUserByPkProjectsAggregate: // value for 'includeUpdateUserByPkProjectsAggregate'
 *      includeUpdateUserByPkProjectsAggregateAggregate: // value for 'includeUpdateUserByPkProjectsAggregateAggregate'
 *      includeUpdateUserByPkProjectsAggregateAggregateAvg: // value for 'includeUpdateUserByPkProjectsAggregateAggregateAvg'
 *      includeUpdateUserByPkProjectsAggregateAggregateMax: // value for 'includeUpdateUserByPkProjectsAggregateAggregateMax'
 *      includeUpdateUserByPkProjectsAggregateAggregateMin: // value for 'includeUpdateUserByPkProjectsAggregateAggregateMin'
 *      includeUpdateUserByPkProjectsAggregateAggregateStddev: // value for 'includeUpdateUserByPkProjectsAggregateAggregateStddev'
 *      includeUpdateUserByPkProjectsAggregateAggregateStddevPop: // value for 'includeUpdateUserByPkProjectsAggregateAggregateStddevPop'
 *      includeUpdateUserByPkProjectsAggregateAggregateStddevSamp: // value for 'includeUpdateUserByPkProjectsAggregateAggregateStddevSamp'
 *      includeUpdateUserByPkProjectsAggregateAggregateSum: // value for 'includeUpdateUserByPkProjectsAggregateAggregateSum'
 *      includeUpdateUserByPkProjectsAggregateAggregateVarPop: // value for 'includeUpdateUserByPkProjectsAggregateAggregateVarPop'
 *      includeUpdateUserByPkProjectsAggregateAggregateVarSamp: // value for 'includeUpdateUserByPkProjectsAggregateAggregateVarSamp'
 *      includeUpdateUserByPkProjectsAggregateAggregateVariance: // value for 'includeUpdateUserByPkProjectsAggregateAggregateVariance'
 *      includeUpdateUserByPkProjectsAggregateNodes: // value for 'includeUpdateUserByPkProjectsAggregateNodes'
 *      includeUpdateUserByPkProjectsAggregateNodesTasks: // value for 'includeUpdateUserByPkProjectsAggregateNodesTasks'
 *   },
 * });
 */
export function useUpdateUserByPkMutationMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateUserByPkMutationMutation, IUpdateUserByPkMutationMutationVariables>) {
        return Apollo.useMutation<IUpdateUserByPkMutationMutation, IUpdateUserByPkMutationMutationVariables>(UpdateUserByPkMutationDocument, baseOptions);
      }
export type UpdateUserByPkMutationMutationHookResult = ReturnType<typeof useUpdateUserByPkMutationMutation>;
export type UpdateUserByPkMutationMutationResult = Apollo.MutationResult<IUpdateUserByPkMutationMutation>;
export type UpdateUserByPkMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateUserByPkMutationMutation, IUpdateUserByPkMutationMutationVariables>;