declare module GraphQL {
  type Maybe<T> = T | null;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
  };

  type BooleanQueryOperatorInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  };

  type DateQueryOperatorInput = {
    eq?: Maybe<Scalars['Date']>;
    ne?: Maybe<Scalars['Date']>;
    gt?: Maybe<Scalars['Date']>;
    gte?: Maybe<Scalars['Date']>;
    lt?: Maybe<Scalars['Date']>;
    lte?: Maybe<Scalars['Date']>;
    in?: Maybe<Array<Maybe<Scalars['Date']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  };

  type Directory = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type DirectoryModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<DirectoryGroupConnection>;
  };

  type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
  };

  enum DirectoryFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
  }

  type DirectoryFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type DirectoryGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type DirectorySortInput = {
    fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type DuotoneGradient = {
    highlight: Scalars['String'];
    shadow: Scalars['String'];
    opacity?: Maybe<Scalars['Int']>;
  };

  type EducationJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    city?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    issueDate?: Maybe<Scalars['Date']>;
    name?: Maybe<Scalars['String']>;
    school?: Maybe<Scalars['String']>;
  };

  type EducationJsonIssueDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type EducationJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<EducationJsonEdge>;
    nodes: Array<EducationJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<EducationJsonGroupConnection>;
  };

  type EducationJsonConnectionDistinctArgs = {
    field: EducationJsonFieldsEnum;
  };

  type EducationJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: EducationJsonFieldsEnum;
  };

  type EducationJsonEdge = {
    next?: Maybe<EducationJson>;
    node: EducationJson;
    previous?: Maybe<EducationJson>;
  };

  enum EducationJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    City = 'city',
    CountryCode = 'countryCode',
    IssueDate = 'issueDate',
    Name = 'name',
    School = 'school',
  }

  type EducationJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    city?: Maybe<StringQueryOperatorInput>;
    countryCode?: Maybe<StringQueryOperatorInput>;
    issueDate?: Maybe<DateQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    school?: Maybe<StringQueryOperatorInput>;
  };

  type EducationJsonFilterListInput = {
    elemMatch?: Maybe<EducationJsonFilterInput>;
  };

  type EducationJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<EducationJsonEdge>;
    nodes: Array<EducationJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type EducationJsonSortInput = {
    fields?: Maybe<Array<Maybe<EducationJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type ExperiencesJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    company?: Maybe<Scalars['String']>;
    companySector?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['Date']>;
    img?: Maybe<Scalars['String']>;
    projects?: Maybe<Array<Maybe<ExperiencesJsonProjects>>>;
    startDate?: Maybe<Scalars['Date']>;
  };

  type ExperiencesJsonEndDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type ExperiencesJsonStartDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type ExperiencesJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ExperiencesJsonEdge>;
    nodes: Array<ExperiencesJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ExperiencesJsonGroupConnection>;
  };

  type ExperiencesJsonConnectionDistinctArgs = {
    field: ExperiencesJsonFieldsEnum;
  };

  type ExperiencesJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ExperiencesJsonFieldsEnum;
  };

  type ExperiencesJsonEdge = {
    next?: Maybe<ExperiencesJson>;
    node: ExperiencesJson;
    previous?: Maybe<ExperiencesJson>;
  };

  enum ExperiencesJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Company = 'company',
    CompanySector = 'companySector',
    EndDate = 'endDate',
    Img = 'img',
    Projects = 'projects',
    ProjectsClient = 'projects___client',
    ProjectsClientSector = 'projects___clientSector',
    ProjectsDescription = 'projects___description',
    ProjectsName = 'projects___name',
    ProjectsTasks = 'projects___tasks',
    ProjectsTechnologies = 'projects___technologies',
    StartDate = 'startDate',
  }

  type ExperiencesJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    company?: Maybe<StringQueryOperatorInput>;
    companySector?: Maybe<StringQueryOperatorInput>;
    endDate?: Maybe<DateQueryOperatorInput>;
    img?: Maybe<StringQueryOperatorInput>;
    projects?: Maybe<ExperiencesJsonProjectsFilterListInput>;
    startDate?: Maybe<DateQueryOperatorInput>;
  };

  type ExperiencesJsonFilterListInput = {
    elemMatch?: Maybe<ExperiencesJsonFilterInput>;
  };

  type ExperiencesJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ExperiencesJsonEdge>;
    nodes: Array<ExperiencesJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type ExperiencesJsonProjects = {
    client?: Maybe<Scalars['String']>;
    clientSector?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    tasks?: Maybe<Array<Maybe<Scalars['String']>>>;
    technologies?: Maybe<Array<Maybe<Scalars['String']>>>;
  };

  type ExperiencesJsonProjectsFilterInput = {
    client?: Maybe<StringQueryOperatorInput>;
    clientSector?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    tasks?: Maybe<StringQueryOperatorInput>;
    technologies?: Maybe<StringQueryOperatorInput>;
  };

  type ExperiencesJsonProjectsFilterListInput = {
    elemMatch?: Maybe<ExperiencesJsonProjectsFilterInput>;
  };

  type ExperiencesJsonSortInput = {
    fields?: Maybe<Array<Maybe<ExperiencesJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type File = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<Scalars['String']>;
    childImageSharp?: Maybe<ImageSharp>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childrenInterestsJson?: Maybe<Array<Maybe<InterestsJson>>>;
    childrenExperiencesJson?: Maybe<Array<Maybe<ExperiencesJson>>>;
    childrenLanguagesJson?: Maybe<Array<Maybe<LanguagesJson>>>;
    childrenSkillsJson?: Maybe<Array<Maybe<SkillsJson>>>;
    childrenEducationJson?: Maybe<Array<Maybe<EducationJson>>>;
    childPersonalDetailsJson?: Maybe<PersonalDetailsJson>;
    childrenToolboxJson?: Maybe<Array<Maybe<ToolboxJson>>>;
    childThemeJson?: Maybe<ThemeJson>;
  };

  type FileModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<FileGroupConnection>;
  };

  type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
  };

  type FileEdge = {
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
  };

  enum FileFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    PublicUrl = 'publicURL',
    ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
    ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
    ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
    ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
    ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
    ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
    ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
    ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
    ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
    ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
    ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
    ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
    ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
    ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
    ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
    ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
    ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
    ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
    ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
    ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
    ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
    ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
    ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
    ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
    ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
    ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
    ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
    ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
    ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
    ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
    ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
    ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
    ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
    ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
    ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
    ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
    ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
    ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
    ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
    ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
    ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
    ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
    ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
    ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
    ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
    ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
    ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
    ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
    ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
    ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
    ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
    ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
    ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
    ChildImageSharpId = 'childImageSharp___id',
    ChildImageSharpParentId = 'childImageSharp___parent___id',
    ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
    ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
    ChildImageSharpParentChildren = 'childImageSharp___parent___children',
    ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
    ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
    ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
    ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
    ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
    ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
    ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
    ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
    ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
    ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
    ChildImageSharpChildren = 'childImageSharp___children',
    ChildImageSharpChildrenId = 'childImageSharp___children___id',
    ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
    ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
    ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
    ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
    ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
    ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
    ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
    ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
    ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
    ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
    ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
    ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
    ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
    ChildImageSharpInternalContent = 'childImageSharp___internal___content',
    ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
    ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
    ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
    ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
    ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
    ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
    ChildImageSharpInternalType = 'childImageSharp___internal___type',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ChildrenInterestsJson = 'childrenInterestsJson',
    ChildrenInterestsJsonId = 'childrenInterestsJson___id',
    ChildrenInterestsJsonParentId = 'childrenInterestsJson___parent___id',
    ChildrenInterestsJsonParentParentId = 'childrenInterestsJson___parent___parent___id',
    ChildrenInterestsJsonParentParentChildren = 'childrenInterestsJson___parent___parent___children',
    ChildrenInterestsJsonParentChildren = 'childrenInterestsJson___parent___children',
    ChildrenInterestsJsonParentChildrenId = 'childrenInterestsJson___parent___children___id',
    ChildrenInterestsJsonParentChildrenChildren = 'childrenInterestsJson___parent___children___children',
    ChildrenInterestsJsonParentInternalContent = 'childrenInterestsJson___parent___internal___content',
    ChildrenInterestsJsonParentInternalContentDigest = 'childrenInterestsJson___parent___internal___contentDigest',
    ChildrenInterestsJsonParentInternalDescription = 'childrenInterestsJson___parent___internal___description',
    ChildrenInterestsJsonParentInternalFieldOwners = 'childrenInterestsJson___parent___internal___fieldOwners',
    ChildrenInterestsJsonParentInternalIgnoreType = 'childrenInterestsJson___parent___internal___ignoreType',
    ChildrenInterestsJsonParentInternalMediaType = 'childrenInterestsJson___parent___internal___mediaType',
    ChildrenInterestsJsonParentInternalOwner = 'childrenInterestsJson___parent___internal___owner',
    ChildrenInterestsJsonParentInternalType = 'childrenInterestsJson___parent___internal___type',
    ChildrenInterestsJsonChildren = 'childrenInterestsJson___children',
    ChildrenInterestsJsonChildrenId = 'childrenInterestsJson___children___id',
    ChildrenInterestsJsonChildrenParentId = 'childrenInterestsJson___children___parent___id',
    ChildrenInterestsJsonChildrenParentChildren = 'childrenInterestsJson___children___parent___children',
    ChildrenInterestsJsonChildrenChildren = 'childrenInterestsJson___children___children',
    ChildrenInterestsJsonChildrenChildrenId = 'childrenInterestsJson___children___children___id',
    ChildrenInterestsJsonChildrenChildrenChildren = 'childrenInterestsJson___children___children___children',
    ChildrenInterestsJsonChildrenInternalContent = 'childrenInterestsJson___children___internal___content',
    ChildrenInterestsJsonChildrenInternalContentDigest = 'childrenInterestsJson___children___internal___contentDigest',
    ChildrenInterestsJsonChildrenInternalDescription = 'childrenInterestsJson___children___internal___description',
    ChildrenInterestsJsonChildrenInternalFieldOwners = 'childrenInterestsJson___children___internal___fieldOwners',
    ChildrenInterestsJsonChildrenInternalIgnoreType = 'childrenInterestsJson___children___internal___ignoreType',
    ChildrenInterestsJsonChildrenInternalMediaType = 'childrenInterestsJson___children___internal___mediaType',
    ChildrenInterestsJsonChildrenInternalOwner = 'childrenInterestsJson___children___internal___owner',
    ChildrenInterestsJsonChildrenInternalType = 'childrenInterestsJson___children___internal___type',
    ChildrenInterestsJsonInternalContent = 'childrenInterestsJson___internal___content',
    ChildrenInterestsJsonInternalContentDigest = 'childrenInterestsJson___internal___contentDigest',
    ChildrenInterestsJsonInternalDescription = 'childrenInterestsJson___internal___description',
    ChildrenInterestsJsonInternalFieldOwners = 'childrenInterestsJson___internal___fieldOwners',
    ChildrenInterestsJsonInternalIgnoreType = 'childrenInterestsJson___internal___ignoreType',
    ChildrenInterestsJsonInternalMediaType = 'childrenInterestsJson___internal___mediaType',
    ChildrenInterestsJsonInternalOwner = 'childrenInterestsJson___internal___owner',
    ChildrenInterestsJsonInternalType = 'childrenInterestsJson___internal___type',
    ChildrenInterestsJsonName = 'childrenInterestsJson___name',
    ChildrenInterestsJsonSortOrder = 'childrenInterestsJson___sortOrder',
    ChildrenExperiencesJson = 'childrenExperiencesJson',
    ChildrenExperiencesJsonId = 'childrenExperiencesJson___id',
    ChildrenExperiencesJsonParentId = 'childrenExperiencesJson___parent___id',
    ChildrenExperiencesJsonParentParentId = 'childrenExperiencesJson___parent___parent___id',
    ChildrenExperiencesJsonParentParentChildren = 'childrenExperiencesJson___parent___parent___children',
    ChildrenExperiencesJsonParentChildren = 'childrenExperiencesJson___parent___children',
    ChildrenExperiencesJsonParentChildrenId = 'childrenExperiencesJson___parent___children___id',
    ChildrenExperiencesJsonParentChildrenChildren = 'childrenExperiencesJson___parent___children___children',
    ChildrenExperiencesJsonParentInternalContent = 'childrenExperiencesJson___parent___internal___content',
    ChildrenExperiencesJsonParentInternalContentDigest = 'childrenExperiencesJson___parent___internal___contentDigest',
    ChildrenExperiencesJsonParentInternalDescription = 'childrenExperiencesJson___parent___internal___description',
    ChildrenExperiencesJsonParentInternalFieldOwners = 'childrenExperiencesJson___parent___internal___fieldOwners',
    ChildrenExperiencesJsonParentInternalIgnoreType = 'childrenExperiencesJson___parent___internal___ignoreType',
    ChildrenExperiencesJsonParentInternalMediaType = 'childrenExperiencesJson___parent___internal___mediaType',
    ChildrenExperiencesJsonParentInternalOwner = 'childrenExperiencesJson___parent___internal___owner',
    ChildrenExperiencesJsonParentInternalType = 'childrenExperiencesJson___parent___internal___type',
    ChildrenExperiencesJsonChildren = 'childrenExperiencesJson___children',
    ChildrenExperiencesJsonChildrenId = 'childrenExperiencesJson___children___id',
    ChildrenExperiencesJsonChildrenParentId = 'childrenExperiencesJson___children___parent___id',
    ChildrenExperiencesJsonChildrenParentChildren = 'childrenExperiencesJson___children___parent___children',
    ChildrenExperiencesJsonChildrenChildren = 'childrenExperiencesJson___children___children',
    ChildrenExperiencesJsonChildrenChildrenId = 'childrenExperiencesJson___children___children___id',
    ChildrenExperiencesJsonChildrenChildrenChildren = 'childrenExperiencesJson___children___children___children',
    ChildrenExperiencesJsonChildrenInternalContent = 'childrenExperiencesJson___children___internal___content',
    ChildrenExperiencesJsonChildrenInternalContentDigest = 'childrenExperiencesJson___children___internal___contentDigest',
    ChildrenExperiencesJsonChildrenInternalDescription = 'childrenExperiencesJson___children___internal___description',
    ChildrenExperiencesJsonChildrenInternalFieldOwners = 'childrenExperiencesJson___children___internal___fieldOwners',
    ChildrenExperiencesJsonChildrenInternalIgnoreType = 'childrenExperiencesJson___children___internal___ignoreType',
    ChildrenExperiencesJsonChildrenInternalMediaType = 'childrenExperiencesJson___children___internal___mediaType',
    ChildrenExperiencesJsonChildrenInternalOwner = 'childrenExperiencesJson___children___internal___owner',
    ChildrenExperiencesJsonChildrenInternalType = 'childrenExperiencesJson___children___internal___type',
    ChildrenExperiencesJsonInternalContent = 'childrenExperiencesJson___internal___content',
    ChildrenExperiencesJsonInternalContentDigest = 'childrenExperiencesJson___internal___contentDigest',
    ChildrenExperiencesJsonInternalDescription = 'childrenExperiencesJson___internal___description',
    ChildrenExperiencesJsonInternalFieldOwners = 'childrenExperiencesJson___internal___fieldOwners',
    ChildrenExperiencesJsonInternalIgnoreType = 'childrenExperiencesJson___internal___ignoreType',
    ChildrenExperiencesJsonInternalMediaType = 'childrenExperiencesJson___internal___mediaType',
    ChildrenExperiencesJsonInternalOwner = 'childrenExperiencesJson___internal___owner',
    ChildrenExperiencesJsonInternalType = 'childrenExperiencesJson___internal___type',
    ChildrenExperiencesJsonCompany = 'childrenExperiencesJson___company',
    ChildrenExperiencesJsonCompanySector = 'childrenExperiencesJson___companySector',
    ChildrenExperiencesJsonEndDate = 'childrenExperiencesJson___endDate',
    ChildrenExperiencesJsonImg = 'childrenExperiencesJson___img',
    ChildrenExperiencesJsonProjects = 'childrenExperiencesJson___projects',
    ChildrenExperiencesJsonProjectsClient = 'childrenExperiencesJson___projects___client',
    ChildrenExperiencesJsonProjectsClientSector = 'childrenExperiencesJson___projects___clientSector',
    ChildrenExperiencesJsonProjectsDescription = 'childrenExperiencesJson___projects___description',
    ChildrenExperiencesJsonProjectsName = 'childrenExperiencesJson___projects___name',
    ChildrenExperiencesJsonProjectsTasks = 'childrenExperiencesJson___projects___tasks',
    ChildrenExperiencesJsonProjectsTechnologies = 'childrenExperiencesJson___projects___technologies',
    ChildrenExperiencesJsonStartDate = 'childrenExperiencesJson___startDate',
    ChildrenLanguagesJson = 'childrenLanguagesJson',
    ChildrenLanguagesJsonId = 'childrenLanguagesJson___id',
    ChildrenLanguagesJsonParentId = 'childrenLanguagesJson___parent___id',
    ChildrenLanguagesJsonParentParentId = 'childrenLanguagesJson___parent___parent___id',
    ChildrenLanguagesJsonParentParentChildren = 'childrenLanguagesJson___parent___parent___children',
    ChildrenLanguagesJsonParentChildren = 'childrenLanguagesJson___parent___children',
    ChildrenLanguagesJsonParentChildrenId = 'childrenLanguagesJson___parent___children___id',
    ChildrenLanguagesJsonParentChildrenChildren = 'childrenLanguagesJson___parent___children___children',
    ChildrenLanguagesJsonParentInternalContent = 'childrenLanguagesJson___parent___internal___content',
    ChildrenLanguagesJsonParentInternalContentDigest = 'childrenLanguagesJson___parent___internal___contentDigest',
    ChildrenLanguagesJsonParentInternalDescription = 'childrenLanguagesJson___parent___internal___description',
    ChildrenLanguagesJsonParentInternalFieldOwners = 'childrenLanguagesJson___parent___internal___fieldOwners',
    ChildrenLanguagesJsonParentInternalIgnoreType = 'childrenLanguagesJson___parent___internal___ignoreType',
    ChildrenLanguagesJsonParentInternalMediaType = 'childrenLanguagesJson___parent___internal___mediaType',
    ChildrenLanguagesJsonParentInternalOwner = 'childrenLanguagesJson___parent___internal___owner',
    ChildrenLanguagesJsonParentInternalType = 'childrenLanguagesJson___parent___internal___type',
    ChildrenLanguagesJsonChildren = 'childrenLanguagesJson___children',
    ChildrenLanguagesJsonChildrenId = 'childrenLanguagesJson___children___id',
    ChildrenLanguagesJsonChildrenParentId = 'childrenLanguagesJson___children___parent___id',
    ChildrenLanguagesJsonChildrenParentChildren = 'childrenLanguagesJson___children___parent___children',
    ChildrenLanguagesJsonChildrenChildren = 'childrenLanguagesJson___children___children',
    ChildrenLanguagesJsonChildrenChildrenId = 'childrenLanguagesJson___children___children___id',
    ChildrenLanguagesJsonChildrenChildrenChildren = 'childrenLanguagesJson___children___children___children',
    ChildrenLanguagesJsonChildrenInternalContent = 'childrenLanguagesJson___children___internal___content',
    ChildrenLanguagesJsonChildrenInternalContentDigest = 'childrenLanguagesJson___children___internal___contentDigest',
    ChildrenLanguagesJsonChildrenInternalDescription = 'childrenLanguagesJson___children___internal___description',
    ChildrenLanguagesJsonChildrenInternalFieldOwners = 'childrenLanguagesJson___children___internal___fieldOwners',
    ChildrenLanguagesJsonChildrenInternalIgnoreType = 'childrenLanguagesJson___children___internal___ignoreType',
    ChildrenLanguagesJsonChildrenInternalMediaType = 'childrenLanguagesJson___children___internal___mediaType',
    ChildrenLanguagesJsonChildrenInternalOwner = 'childrenLanguagesJson___children___internal___owner',
    ChildrenLanguagesJsonChildrenInternalType = 'childrenLanguagesJson___children___internal___type',
    ChildrenLanguagesJsonInternalContent = 'childrenLanguagesJson___internal___content',
    ChildrenLanguagesJsonInternalContentDigest = 'childrenLanguagesJson___internal___contentDigest',
    ChildrenLanguagesJsonInternalDescription = 'childrenLanguagesJson___internal___description',
    ChildrenLanguagesJsonInternalFieldOwners = 'childrenLanguagesJson___internal___fieldOwners',
    ChildrenLanguagesJsonInternalIgnoreType = 'childrenLanguagesJson___internal___ignoreType',
    ChildrenLanguagesJsonInternalMediaType = 'childrenLanguagesJson___internal___mediaType',
    ChildrenLanguagesJsonInternalOwner = 'childrenLanguagesJson___internal___owner',
    ChildrenLanguagesJsonInternalType = 'childrenLanguagesJson___internal___type',
    ChildrenLanguagesJsonImg = 'childrenLanguagesJson___img',
    ChildrenLanguagesJsonName = 'childrenLanguagesJson___name',
    ChildrenLanguagesJsonProficiencyLevel = 'childrenLanguagesJson___proficiencyLevel',
    ChildrenLanguagesJsonSortOrder = 'childrenLanguagesJson___sortOrder',
    ChildrenSkillsJson = 'childrenSkillsJson',
    ChildrenSkillsJsonId = 'childrenSkillsJson___id',
    ChildrenSkillsJsonParentId = 'childrenSkillsJson___parent___id',
    ChildrenSkillsJsonParentParentId = 'childrenSkillsJson___parent___parent___id',
    ChildrenSkillsJsonParentParentChildren = 'childrenSkillsJson___parent___parent___children',
    ChildrenSkillsJsonParentChildren = 'childrenSkillsJson___parent___children',
    ChildrenSkillsJsonParentChildrenId = 'childrenSkillsJson___parent___children___id',
    ChildrenSkillsJsonParentChildrenChildren = 'childrenSkillsJson___parent___children___children',
    ChildrenSkillsJsonParentInternalContent = 'childrenSkillsJson___parent___internal___content',
    ChildrenSkillsJsonParentInternalContentDigest = 'childrenSkillsJson___parent___internal___contentDigest',
    ChildrenSkillsJsonParentInternalDescription = 'childrenSkillsJson___parent___internal___description',
    ChildrenSkillsJsonParentInternalFieldOwners = 'childrenSkillsJson___parent___internal___fieldOwners',
    ChildrenSkillsJsonParentInternalIgnoreType = 'childrenSkillsJson___parent___internal___ignoreType',
    ChildrenSkillsJsonParentInternalMediaType = 'childrenSkillsJson___parent___internal___mediaType',
    ChildrenSkillsJsonParentInternalOwner = 'childrenSkillsJson___parent___internal___owner',
    ChildrenSkillsJsonParentInternalType = 'childrenSkillsJson___parent___internal___type',
    ChildrenSkillsJsonChildren = 'childrenSkillsJson___children',
    ChildrenSkillsJsonChildrenId = 'childrenSkillsJson___children___id',
    ChildrenSkillsJsonChildrenParentId = 'childrenSkillsJson___children___parent___id',
    ChildrenSkillsJsonChildrenParentChildren = 'childrenSkillsJson___children___parent___children',
    ChildrenSkillsJsonChildrenChildren = 'childrenSkillsJson___children___children',
    ChildrenSkillsJsonChildrenChildrenId = 'childrenSkillsJson___children___children___id',
    ChildrenSkillsJsonChildrenChildrenChildren = 'childrenSkillsJson___children___children___children',
    ChildrenSkillsJsonChildrenInternalContent = 'childrenSkillsJson___children___internal___content',
    ChildrenSkillsJsonChildrenInternalContentDigest = 'childrenSkillsJson___children___internal___contentDigest',
    ChildrenSkillsJsonChildrenInternalDescription = 'childrenSkillsJson___children___internal___description',
    ChildrenSkillsJsonChildrenInternalFieldOwners = 'childrenSkillsJson___children___internal___fieldOwners',
    ChildrenSkillsJsonChildrenInternalIgnoreType = 'childrenSkillsJson___children___internal___ignoreType',
    ChildrenSkillsJsonChildrenInternalMediaType = 'childrenSkillsJson___children___internal___mediaType',
    ChildrenSkillsJsonChildrenInternalOwner = 'childrenSkillsJson___children___internal___owner',
    ChildrenSkillsJsonChildrenInternalType = 'childrenSkillsJson___children___internal___type',
    ChildrenSkillsJsonInternalContent = 'childrenSkillsJson___internal___content',
    ChildrenSkillsJsonInternalContentDigest = 'childrenSkillsJson___internal___contentDigest',
    ChildrenSkillsJsonInternalDescription = 'childrenSkillsJson___internal___description',
    ChildrenSkillsJsonInternalFieldOwners = 'childrenSkillsJson___internal___fieldOwners',
    ChildrenSkillsJsonInternalIgnoreType = 'childrenSkillsJson___internal___ignoreType',
    ChildrenSkillsJsonInternalMediaType = 'childrenSkillsJson___internal___mediaType',
    ChildrenSkillsJsonInternalOwner = 'childrenSkillsJson___internal___owner',
    ChildrenSkillsJsonInternalType = 'childrenSkillsJson___internal___type',
    ChildrenSkillsJsonName = 'childrenSkillsJson___name',
    ChildrenSkillsJsonSortOrder = 'childrenSkillsJson___sortOrder',
    ChildrenSkillsJsonItems = 'childrenSkillsJson___items',
    ChildrenSkillsJsonItemsName = 'childrenSkillsJson___items___name',
    ChildrenSkillsJsonItemsProficiencyLevel = 'childrenSkillsJson___items___proficiencyLevel',
    ChildrenSkillsJsonItemsSortOrder = 'childrenSkillsJson___items___sortOrder',
    ChildrenSkillsJsonItemsSection = 'childrenSkillsJson___items___section',
    ChildrenEducationJson = 'childrenEducationJson',
    ChildrenEducationJsonId = 'childrenEducationJson___id',
    ChildrenEducationJsonParentId = 'childrenEducationJson___parent___id',
    ChildrenEducationJsonParentParentId = 'childrenEducationJson___parent___parent___id',
    ChildrenEducationJsonParentParentChildren = 'childrenEducationJson___parent___parent___children',
    ChildrenEducationJsonParentChildren = 'childrenEducationJson___parent___children',
    ChildrenEducationJsonParentChildrenId = 'childrenEducationJson___parent___children___id',
    ChildrenEducationJsonParentChildrenChildren = 'childrenEducationJson___parent___children___children',
    ChildrenEducationJsonParentInternalContent = 'childrenEducationJson___parent___internal___content',
    ChildrenEducationJsonParentInternalContentDigest = 'childrenEducationJson___parent___internal___contentDigest',
    ChildrenEducationJsonParentInternalDescription = 'childrenEducationJson___parent___internal___description',
    ChildrenEducationJsonParentInternalFieldOwners = 'childrenEducationJson___parent___internal___fieldOwners',
    ChildrenEducationJsonParentInternalIgnoreType = 'childrenEducationJson___parent___internal___ignoreType',
    ChildrenEducationJsonParentInternalMediaType = 'childrenEducationJson___parent___internal___mediaType',
    ChildrenEducationJsonParentInternalOwner = 'childrenEducationJson___parent___internal___owner',
    ChildrenEducationJsonParentInternalType = 'childrenEducationJson___parent___internal___type',
    ChildrenEducationJsonChildren = 'childrenEducationJson___children',
    ChildrenEducationJsonChildrenId = 'childrenEducationJson___children___id',
    ChildrenEducationJsonChildrenParentId = 'childrenEducationJson___children___parent___id',
    ChildrenEducationJsonChildrenParentChildren = 'childrenEducationJson___children___parent___children',
    ChildrenEducationJsonChildrenChildren = 'childrenEducationJson___children___children',
    ChildrenEducationJsonChildrenChildrenId = 'childrenEducationJson___children___children___id',
    ChildrenEducationJsonChildrenChildrenChildren = 'childrenEducationJson___children___children___children',
    ChildrenEducationJsonChildrenInternalContent = 'childrenEducationJson___children___internal___content',
    ChildrenEducationJsonChildrenInternalContentDigest = 'childrenEducationJson___children___internal___contentDigest',
    ChildrenEducationJsonChildrenInternalDescription = 'childrenEducationJson___children___internal___description',
    ChildrenEducationJsonChildrenInternalFieldOwners = 'childrenEducationJson___children___internal___fieldOwners',
    ChildrenEducationJsonChildrenInternalIgnoreType = 'childrenEducationJson___children___internal___ignoreType',
    ChildrenEducationJsonChildrenInternalMediaType = 'childrenEducationJson___children___internal___mediaType',
    ChildrenEducationJsonChildrenInternalOwner = 'childrenEducationJson___children___internal___owner',
    ChildrenEducationJsonChildrenInternalType = 'childrenEducationJson___children___internal___type',
    ChildrenEducationJsonInternalContent = 'childrenEducationJson___internal___content',
    ChildrenEducationJsonInternalContentDigest = 'childrenEducationJson___internal___contentDigest',
    ChildrenEducationJsonInternalDescription = 'childrenEducationJson___internal___description',
    ChildrenEducationJsonInternalFieldOwners = 'childrenEducationJson___internal___fieldOwners',
    ChildrenEducationJsonInternalIgnoreType = 'childrenEducationJson___internal___ignoreType',
    ChildrenEducationJsonInternalMediaType = 'childrenEducationJson___internal___mediaType',
    ChildrenEducationJsonInternalOwner = 'childrenEducationJson___internal___owner',
    ChildrenEducationJsonInternalType = 'childrenEducationJson___internal___type',
    ChildrenEducationJsonCity = 'childrenEducationJson___city',
    ChildrenEducationJsonCountryCode = 'childrenEducationJson___countryCode',
    ChildrenEducationJsonIssueDate = 'childrenEducationJson___issueDate',
    ChildrenEducationJsonName = 'childrenEducationJson___name',
    ChildrenEducationJsonSchool = 'childrenEducationJson___school',
    ChildPersonalDetailsJsonId = 'childPersonalDetailsJson___id',
    ChildPersonalDetailsJsonParentId = 'childPersonalDetailsJson___parent___id',
    ChildPersonalDetailsJsonParentParentId = 'childPersonalDetailsJson___parent___parent___id',
    ChildPersonalDetailsJsonParentParentChildren = 'childPersonalDetailsJson___parent___parent___children',
    ChildPersonalDetailsJsonParentChildren = 'childPersonalDetailsJson___parent___children',
    ChildPersonalDetailsJsonParentChildrenId = 'childPersonalDetailsJson___parent___children___id',
    ChildPersonalDetailsJsonParentChildrenChildren = 'childPersonalDetailsJson___parent___children___children',
    ChildPersonalDetailsJsonParentInternalContent = 'childPersonalDetailsJson___parent___internal___content',
    ChildPersonalDetailsJsonParentInternalContentDigest = 'childPersonalDetailsJson___parent___internal___contentDigest',
    ChildPersonalDetailsJsonParentInternalDescription = 'childPersonalDetailsJson___parent___internal___description',
    ChildPersonalDetailsJsonParentInternalFieldOwners = 'childPersonalDetailsJson___parent___internal___fieldOwners',
    ChildPersonalDetailsJsonParentInternalIgnoreType = 'childPersonalDetailsJson___parent___internal___ignoreType',
    ChildPersonalDetailsJsonParentInternalMediaType = 'childPersonalDetailsJson___parent___internal___mediaType',
    ChildPersonalDetailsJsonParentInternalOwner = 'childPersonalDetailsJson___parent___internal___owner',
    ChildPersonalDetailsJsonParentInternalType = 'childPersonalDetailsJson___parent___internal___type',
    ChildPersonalDetailsJsonChildren = 'childPersonalDetailsJson___children',
    ChildPersonalDetailsJsonChildrenId = 'childPersonalDetailsJson___children___id',
    ChildPersonalDetailsJsonChildrenParentId = 'childPersonalDetailsJson___children___parent___id',
    ChildPersonalDetailsJsonChildrenParentChildren = 'childPersonalDetailsJson___children___parent___children',
    ChildPersonalDetailsJsonChildrenChildren = 'childPersonalDetailsJson___children___children',
    ChildPersonalDetailsJsonChildrenChildrenId = 'childPersonalDetailsJson___children___children___id',
    ChildPersonalDetailsJsonChildrenChildrenChildren = 'childPersonalDetailsJson___children___children___children',
    ChildPersonalDetailsJsonChildrenInternalContent = 'childPersonalDetailsJson___children___internal___content',
    ChildPersonalDetailsJsonChildrenInternalContentDigest = 'childPersonalDetailsJson___children___internal___contentDigest',
    ChildPersonalDetailsJsonChildrenInternalDescription = 'childPersonalDetailsJson___children___internal___description',
    ChildPersonalDetailsJsonChildrenInternalFieldOwners = 'childPersonalDetailsJson___children___internal___fieldOwners',
    ChildPersonalDetailsJsonChildrenInternalIgnoreType = 'childPersonalDetailsJson___children___internal___ignoreType',
    ChildPersonalDetailsJsonChildrenInternalMediaType = 'childPersonalDetailsJson___children___internal___mediaType',
    ChildPersonalDetailsJsonChildrenInternalOwner = 'childPersonalDetailsJson___children___internal___owner',
    ChildPersonalDetailsJsonChildrenInternalType = 'childPersonalDetailsJson___children___internal___type',
    ChildPersonalDetailsJsonInternalContent = 'childPersonalDetailsJson___internal___content',
    ChildPersonalDetailsJsonInternalContentDigest = 'childPersonalDetailsJson___internal___contentDigest',
    ChildPersonalDetailsJsonInternalDescription = 'childPersonalDetailsJson___internal___description',
    ChildPersonalDetailsJsonInternalFieldOwners = 'childPersonalDetailsJson___internal___fieldOwners',
    ChildPersonalDetailsJsonInternalIgnoreType = 'childPersonalDetailsJson___internal___ignoreType',
    ChildPersonalDetailsJsonInternalMediaType = 'childPersonalDetailsJson___internal___mediaType',
    ChildPersonalDetailsJsonInternalOwner = 'childPersonalDetailsJson___internal___owner',
    ChildPersonalDetailsJsonInternalType = 'childPersonalDetailsJson___internal___type',
    ChildPersonalDetailsJsonContacts = 'childPersonalDetailsJson___contacts',
    ChildPersonalDetailsJsonContactsLabel = 'childPersonalDetailsJson___contacts___label',
    ChildPersonalDetailsJsonContactsLink = 'childPersonalDetailsJson___contacts___link',
    ChildPersonalDetailsJsonContactsSortOrder = 'childPersonalDetailsJson___contacts___sortOrder',
    ChildPersonalDetailsJsonContactsType = 'childPersonalDetailsJson___contacts___type',
    ChildPersonalDetailsJsonFullName = 'childPersonalDetailsJson___fullName',
    ChildPersonalDetailsJsonJobTitle = 'childPersonalDetailsJson___jobTitle',
    ChildPersonalDetailsJsonPersonalInformation = 'childPersonalDetailsJson___personalInformation',
    ChildPersonalDetailsJsonPersonalInformationLabel = 'childPersonalDetailsJson___personalInformation___label',
    ChildPersonalDetailsJsonPersonalInformationSortOrder = 'childPersonalDetailsJson___personalInformation___sortOrder',
    ChildPersonalDetailsJsonPersonalInformationValue = 'childPersonalDetailsJson___personalInformation___value',
    ChildPersonalDetailsJsonTwitterUsername = 'childPersonalDetailsJson___twitterUsername',
    ChildrenToolboxJson = 'childrenToolboxJson',
    ChildrenToolboxJsonId = 'childrenToolboxJson___id',
    ChildrenToolboxJsonParentId = 'childrenToolboxJson___parent___id',
    ChildrenToolboxJsonParentParentId = 'childrenToolboxJson___parent___parent___id',
    ChildrenToolboxJsonParentParentChildren = 'childrenToolboxJson___parent___parent___children',
    ChildrenToolboxJsonParentChildren = 'childrenToolboxJson___parent___children',
    ChildrenToolboxJsonParentChildrenId = 'childrenToolboxJson___parent___children___id',
    ChildrenToolboxJsonParentChildrenChildren = 'childrenToolboxJson___parent___children___children',
    ChildrenToolboxJsonParentInternalContent = 'childrenToolboxJson___parent___internal___content',
    ChildrenToolboxJsonParentInternalContentDigest = 'childrenToolboxJson___parent___internal___contentDigest',
    ChildrenToolboxJsonParentInternalDescription = 'childrenToolboxJson___parent___internal___description',
    ChildrenToolboxJsonParentInternalFieldOwners = 'childrenToolboxJson___parent___internal___fieldOwners',
    ChildrenToolboxJsonParentInternalIgnoreType = 'childrenToolboxJson___parent___internal___ignoreType',
    ChildrenToolboxJsonParentInternalMediaType = 'childrenToolboxJson___parent___internal___mediaType',
    ChildrenToolboxJsonParentInternalOwner = 'childrenToolboxJson___parent___internal___owner',
    ChildrenToolboxJsonParentInternalType = 'childrenToolboxJson___parent___internal___type',
    ChildrenToolboxJsonChildren = 'childrenToolboxJson___children',
    ChildrenToolboxJsonChildrenId = 'childrenToolboxJson___children___id',
    ChildrenToolboxJsonChildrenParentId = 'childrenToolboxJson___children___parent___id',
    ChildrenToolboxJsonChildrenParentChildren = 'childrenToolboxJson___children___parent___children',
    ChildrenToolboxJsonChildrenChildren = 'childrenToolboxJson___children___children',
    ChildrenToolboxJsonChildrenChildrenId = 'childrenToolboxJson___children___children___id',
    ChildrenToolboxJsonChildrenChildrenChildren = 'childrenToolboxJson___children___children___children',
    ChildrenToolboxJsonChildrenInternalContent = 'childrenToolboxJson___children___internal___content',
    ChildrenToolboxJsonChildrenInternalContentDigest = 'childrenToolboxJson___children___internal___contentDigest',
    ChildrenToolboxJsonChildrenInternalDescription = 'childrenToolboxJson___children___internal___description',
    ChildrenToolboxJsonChildrenInternalFieldOwners = 'childrenToolboxJson___children___internal___fieldOwners',
    ChildrenToolboxJsonChildrenInternalIgnoreType = 'childrenToolboxJson___children___internal___ignoreType',
    ChildrenToolboxJsonChildrenInternalMediaType = 'childrenToolboxJson___children___internal___mediaType',
    ChildrenToolboxJsonChildrenInternalOwner = 'childrenToolboxJson___children___internal___owner',
    ChildrenToolboxJsonChildrenInternalType = 'childrenToolboxJson___children___internal___type',
    ChildrenToolboxJsonInternalContent = 'childrenToolboxJson___internal___content',
    ChildrenToolboxJsonInternalContentDigest = 'childrenToolboxJson___internal___contentDigest',
    ChildrenToolboxJsonInternalDescription = 'childrenToolboxJson___internal___description',
    ChildrenToolboxJsonInternalFieldOwners = 'childrenToolboxJson___internal___fieldOwners',
    ChildrenToolboxJsonInternalIgnoreType = 'childrenToolboxJson___internal___ignoreType',
    ChildrenToolboxJsonInternalMediaType = 'childrenToolboxJson___internal___mediaType',
    ChildrenToolboxJsonInternalOwner = 'childrenToolboxJson___internal___owner',
    ChildrenToolboxJsonInternalType = 'childrenToolboxJson___internal___type',
    ChildrenToolboxJsonImg = 'childrenToolboxJson___img',
    ChildrenToolboxJsonLink = 'childrenToolboxJson___link',
    ChildrenToolboxJsonName = 'childrenToolboxJson___name',
    ChildrenToolboxJsonSortOrder = 'childrenToolboxJson___sortOrder',
    ChildThemeJsonId = 'childThemeJson___id',
    ChildThemeJsonParentId = 'childThemeJson___parent___id',
    ChildThemeJsonParentParentId = 'childThemeJson___parent___parent___id',
    ChildThemeJsonParentParentChildren = 'childThemeJson___parent___parent___children',
    ChildThemeJsonParentChildren = 'childThemeJson___parent___children',
    ChildThemeJsonParentChildrenId = 'childThemeJson___parent___children___id',
    ChildThemeJsonParentChildrenChildren = 'childThemeJson___parent___children___children',
    ChildThemeJsonParentInternalContent = 'childThemeJson___parent___internal___content',
    ChildThemeJsonParentInternalContentDigest = 'childThemeJson___parent___internal___contentDigest',
    ChildThemeJsonParentInternalDescription = 'childThemeJson___parent___internal___description',
    ChildThemeJsonParentInternalFieldOwners = 'childThemeJson___parent___internal___fieldOwners',
    ChildThemeJsonParentInternalIgnoreType = 'childThemeJson___parent___internal___ignoreType',
    ChildThemeJsonParentInternalMediaType = 'childThemeJson___parent___internal___mediaType',
    ChildThemeJsonParentInternalOwner = 'childThemeJson___parent___internal___owner',
    ChildThemeJsonParentInternalType = 'childThemeJson___parent___internal___type',
    ChildThemeJsonChildren = 'childThemeJson___children',
    ChildThemeJsonChildrenId = 'childThemeJson___children___id',
    ChildThemeJsonChildrenParentId = 'childThemeJson___children___parent___id',
    ChildThemeJsonChildrenParentChildren = 'childThemeJson___children___parent___children',
    ChildThemeJsonChildrenChildren = 'childThemeJson___children___children',
    ChildThemeJsonChildrenChildrenId = 'childThemeJson___children___children___id',
    ChildThemeJsonChildrenChildrenChildren = 'childThemeJson___children___children___children',
    ChildThemeJsonChildrenInternalContent = 'childThemeJson___children___internal___content',
    ChildThemeJsonChildrenInternalContentDigest = 'childThemeJson___children___internal___contentDigest',
    ChildThemeJsonChildrenInternalDescription = 'childThemeJson___children___internal___description',
    ChildThemeJsonChildrenInternalFieldOwners = 'childThemeJson___children___internal___fieldOwners',
    ChildThemeJsonChildrenInternalIgnoreType = 'childThemeJson___children___internal___ignoreType',
    ChildThemeJsonChildrenInternalMediaType = 'childThemeJson___children___internal___mediaType',
    ChildThemeJsonChildrenInternalOwner = 'childThemeJson___children___internal___owner',
    ChildThemeJsonChildrenInternalType = 'childThemeJson___children___internal___type',
    ChildThemeJsonInternalContent = 'childThemeJson___internal___content',
    ChildThemeJsonInternalContentDigest = 'childThemeJson___internal___contentDigest',
    ChildThemeJsonInternalDescription = 'childThemeJson___internal___description',
    ChildThemeJsonInternalFieldOwners = 'childThemeJson___internal___fieldOwners',
    ChildThemeJsonInternalIgnoreType = 'childThemeJson___internal___ignoreType',
    ChildThemeJsonInternalMediaType = 'childThemeJson___internal___mediaType',
    ChildThemeJsonInternalOwner = 'childThemeJson___internal___owner',
    ChildThemeJsonInternalType = 'childThemeJson___internal___type',
    ChildThemeJsonColorsDarkBackground = 'childThemeJson___colors___dark___background',
    ChildThemeJsonColorsDarkBody1 = 'childThemeJson___colors___dark___body1',
    ChildThemeJsonColorsDarkBody2 = 'childThemeJson___colors___dark___body2',
    ChildThemeJsonColorsDarkCaption = 'childThemeJson___colors___dark___caption',
    ChildThemeJsonColorsDarkDark = 'childThemeJson___colors___dark___dark',
    ChildThemeJsonColorsDarkError = 'childThemeJson___colors___dark___error',
    ChildThemeJsonColorsDarkInfo = 'childThemeJson___colors___dark___info',
    ChildThemeJsonColorsDarkPrimary = 'childThemeJson___colors___dark___primary',
    ChildThemeJsonColorsDarkSecondary = 'childThemeJson___colors___dark___secondary',
    ChildThemeJsonColorsDarkSubtitle = 'childThemeJson___colors___dark___subtitle',
    ChildThemeJsonColorsDarkSuccess = 'childThemeJson___colors___dark___success',
    ChildThemeJsonColorsDarkText = 'childThemeJson___colors___dark___text',
    ChildThemeJsonColorsDarkWhite = 'childThemeJson___colors___dark___white',
    ChildThemeJsonColorsLightBackground = 'childThemeJson___colors___light___background',
    ChildThemeJsonColorsLightBody1 = 'childThemeJson___colors___light___body1',
    ChildThemeJsonColorsLightBody2 = 'childThemeJson___colors___light___body2',
    ChildThemeJsonColorsLightCaption = 'childThemeJson___colors___light___caption',
    ChildThemeJsonColorsLightDark = 'childThemeJson___colors___light___dark',
    ChildThemeJsonColorsLightError = 'childThemeJson___colors___light___error',
    ChildThemeJsonColorsLightInfo = 'childThemeJson___colors___light___info',
    ChildThemeJsonColorsLightPrimary = 'childThemeJson___colors___light___primary',
    ChildThemeJsonColorsLightSecondary = 'childThemeJson___colors___light___secondary',
    ChildThemeJsonColorsLightSubtitle = 'childThemeJson___colors___light___subtitle',
    ChildThemeJsonColorsLightSuccess = 'childThemeJson___colors___light___success',
    ChildThemeJsonColorsLightText = 'childThemeJson___colors___light___text',
    ChildThemeJsonColorsLightWhite = 'childThemeJson___colors___light___white',
    ChildThemeJsonFontsMain = 'childThemeJson___fonts___main',
    ChildThemeJsonFontsTitle = 'childThemeJson___fonts___title',
    ChildThemeJsonFontWeightsBold = 'childThemeJson___fontWeights___bold',
    ChildThemeJsonFontWeightsBolder = 'childThemeJson___fontWeights___bolder',
    ChildThemeJsonFontWeightsRegular = 'childThemeJson___fontWeights___regular',
  }

  type FileFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childrenInterestsJson?: Maybe<InterestsJsonFilterListInput>;
    childrenExperiencesJson?: Maybe<ExperiencesJsonFilterListInput>;
    childrenLanguagesJson?: Maybe<LanguagesJsonFilterListInput>;
    childrenSkillsJson?: Maybe<SkillsJsonFilterListInput>;
    childrenEducationJson?: Maybe<EducationJsonFilterListInput>;
    childPersonalDetailsJson?: Maybe<PersonalDetailsJsonFilterInput>;
    childrenToolboxJson?: Maybe<ToolboxJsonFilterListInput>;
    childThemeJson?: Maybe<ThemeJsonFilterInput>;
  };

  type FileGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type FileSortInput = {
    fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type FloatQueryOperatorInput = {
    eq?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  };

  enum ImageCropFocus {
    Center = 'CENTER',
    North = 'NORTH',
    Northeast = 'NORTHEAST',
    East = 'EAST',
    Southeast = 'SOUTHEAST',
    South = 'SOUTH',
    Southwest = 'SOUTHWEST',
    West = 'WEST',
    Northwest = 'NORTHWEST',
    Entropy = 'ENTROPY',
    Attention = 'ATTENTION',
  }

  enum ImageFit {
    Cover = 'COVER',
    Contain = 'CONTAIN',
    Fill = 'FILL',
    Inside = 'INSIDE',
    Outside = 'OUTSIDE',
  }

  enum ImageFormat {
    NoChange = 'NO_CHANGE',
    Jpg = 'JPG',
    Png = 'PNG',
    Webp = 'WEBP',
  }

  type ImageSharp = Node & {
    fixed?: Maybe<ImageSharpFixed>;
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    resolutions?: Maybe<ImageSharpResolutions>;
    fluid?: Maybe<ImageSharpFluid>;
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    sizes?: Maybe<ImageSharpSizes>;
    original?: Maybe<ImageSharpOriginal>;
    resize?: Maybe<ImageSharpResize>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type ImageSharpFixedArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpResolutionsArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpFluidArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  };

  type ImageSharpSizesArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  };

  type ImageSharpResizeArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG?: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ImageSharpGroupConnection>;
  };

  type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpEdge = {
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
  };

  enum ImageSharpFieldsEnum {
    FixedBase64 = 'fixed___base64',
    FixedTracedSvg = 'fixed___tracedSVG',
    FixedAspectRatio = 'fixed___aspectRatio',
    FixedWidth = 'fixed___width',
    FixedHeight = 'fixed___height',
    FixedSrc = 'fixed___src',
    FixedSrcSet = 'fixed___srcSet',
    FixedSrcWebp = 'fixed___srcWebp',
    FixedSrcSetWebp = 'fixed___srcSetWebp',
    FixedOriginalName = 'fixed___originalName',
    ResolutionsBase64 = 'resolutions___base64',
    ResolutionsTracedSvg = 'resolutions___tracedSVG',
    ResolutionsAspectRatio = 'resolutions___aspectRatio',
    ResolutionsWidth = 'resolutions___width',
    ResolutionsHeight = 'resolutions___height',
    ResolutionsSrc = 'resolutions___src',
    ResolutionsSrcSet = 'resolutions___srcSet',
    ResolutionsSrcWebp = 'resolutions___srcWebp',
    ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
    ResolutionsOriginalName = 'resolutions___originalName',
    FluidBase64 = 'fluid___base64',
    FluidTracedSvg = 'fluid___tracedSVG',
    FluidAspectRatio = 'fluid___aspectRatio',
    FluidSrc = 'fluid___src',
    FluidSrcSet = 'fluid___srcSet',
    FluidSrcWebp = 'fluid___srcWebp',
    FluidSrcSetWebp = 'fluid___srcSetWebp',
    FluidSizes = 'fluid___sizes',
    FluidOriginalImg = 'fluid___originalImg',
    FluidOriginalName = 'fluid___originalName',
    FluidPresentationWidth = 'fluid___presentationWidth',
    FluidPresentationHeight = 'fluid___presentationHeight',
    SizesBase64 = 'sizes___base64',
    SizesTracedSvg = 'sizes___tracedSVG',
    SizesAspectRatio = 'sizes___aspectRatio',
    SizesSrc = 'sizes___src',
    SizesSrcSet = 'sizes___srcSet',
    SizesSrcWebp = 'sizes___srcWebp',
    SizesSrcSetWebp = 'sizes___srcSetWebp',
    SizesSizes = 'sizes___sizes',
    SizesOriginalImg = 'sizes___originalImg',
    SizesOriginalName = 'sizes___originalName',
    SizesPresentationWidth = 'sizes___presentationWidth',
    SizesPresentationHeight = 'sizes___presentationHeight',
    OriginalWidth = 'original___width',
    OriginalHeight = 'original___height',
    OriginalSrc = 'original___src',
    ResizeSrc = 'resize___src',
    ResizeTracedSvg = 'resize___tracedSVG',
    ResizeWidth = 'resize___width',
    ResizeHeight = 'resize___height',
    ResizeAspectRatio = 'resize___aspectRatio',
    ResizeOriginalName = 'resize___originalName',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
  }

  type ImageSharpFilterInput = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type ImageSharpFixed = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
  };

  type ImageSharpFixedFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpFluid = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth: Scalars['Int'];
    presentationHeight: Scalars['Int'];
  };

  type ImageSharpFluidFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginal = {
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginalFilterInput = {
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResize = {
    src?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    originalName?: Maybe<Scalars['String']>;
  };

  type ImageSharpResizeFilterInput = {
    src?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResolutions = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
  };

  type ImageSharpResolutionsFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpSizes = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth: Scalars['Int'];
    presentationHeight: Scalars['Int'];
  };

  type ImageSharpSizesFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpSortInput = {
    fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type InterestsJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    name?: Maybe<Scalars['String']>;
    sortOrder?: Maybe<Scalars['Int']>;
  };

  type InterestsJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<InterestsJsonEdge>;
    nodes: Array<InterestsJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<InterestsJsonGroupConnection>;
  };

  type InterestsJsonConnectionDistinctArgs = {
    field: InterestsJsonFieldsEnum;
  };

  type InterestsJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: InterestsJsonFieldsEnum;
  };

  type InterestsJsonEdge = {
    next?: Maybe<InterestsJson>;
    node: InterestsJson;
    previous?: Maybe<InterestsJson>;
  };

  enum InterestsJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Name = 'name',
    SortOrder = 'sortOrder',
  }

  type InterestsJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
  };

  type InterestsJsonFilterListInput = {
    elemMatch?: Maybe<InterestsJsonFilterInput>;
  };

  type InterestsJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<InterestsJsonEdge>;
    nodes: Array<InterestsJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type InterestsJsonSortInput = {
    fields?: Maybe<Array<Maybe<InterestsJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type Internal = {
    content?: Maybe<Scalars['String']>;
    contentDigest: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
    ignoreType?: Maybe<Scalars['Boolean']>;
    mediaType?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    type: Scalars['String'];
  };

  type InternalFilterInput = {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
  };

  type IntQueryOperatorInput = {
    eq?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  };

  type LanguagesJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    img?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    proficiencyLevel?: Maybe<Scalars['Float']>;
    sortOrder?: Maybe<Scalars['Int']>;
  };

  type LanguagesJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<LanguagesJsonEdge>;
    nodes: Array<LanguagesJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<LanguagesJsonGroupConnection>;
  };

  type LanguagesJsonConnectionDistinctArgs = {
    field: LanguagesJsonFieldsEnum;
  };

  type LanguagesJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: LanguagesJsonFieldsEnum;
  };

  type LanguagesJsonEdge = {
    next?: Maybe<LanguagesJson>;
    node: LanguagesJson;
    previous?: Maybe<LanguagesJson>;
  };

  enum LanguagesJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Img = 'img',
    Name = 'name',
    ProficiencyLevel = 'proficiencyLevel',
    SortOrder = 'sortOrder',
  }

  type LanguagesJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    img?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    proficiencyLevel?: Maybe<FloatQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
  };

  type LanguagesJsonFilterListInput = {
    elemMatch?: Maybe<LanguagesJsonFilterInput>;
  };

  type LanguagesJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<LanguagesJsonEdge>;
    nodes: Array<LanguagesJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type LanguagesJsonSortInput = {
    fields?: Maybe<Array<Maybe<LanguagesJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  /** Node Interface */
  type Node = {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type NodeFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type NodeFilterListInput = {
    elemMatch?: Maybe<NodeFilterInput>;
  };

  type PageInfo = {
    currentPage: Scalars['Int'];
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    itemCount: Scalars['Int'];
    pageCount: Scalars['Int'];
    perPage?: Maybe<Scalars['Int']>;
    totalCount: Scalars['Int'];
  };

  type PersonalDetailsJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    contacts?: Maybe<Array<Maybe<PersonalDetailsJsonContacts>>>;
    fullName?: Maybe<Scalars['String']>;
    jobTitle?: Maybe<Scalars['String']>;
    personalInformation?: Maybe<Array<Maybe<PersonalDetailsJsonPersonalInformation>>>;
    twitterUsername?: Maybe<Scalars['String']>;
  };

  type PersonalDetailsJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<PersonalDetailsJsonEdge>;
    nodes: Array<PersonalDetailsJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<PersonalDetailsJsonGroupConnection>;
  };

  type PersonalDetailsJsonConnectionDistinctArgs = {
    field: PersonalDetailsJsonFieldsEnum;
  };

  type PersonalDetailsJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: PersonalDetailsJsonFieldsEnum;
  };

  type PersonalDetailsJsonContacts = {
    label?: Maybe<Scalars['String']>;
    link?: Maybe<Scalars['String']>;
    sortOrder?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
  };

  type PersonalDetailsJsonContactsFilterInput = {
    label?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
  };

  type PersonalDetailsJsonContactsFilterListInput = {
    elemMatch?: Maybe<PersonalDetailsJsonContactsFilterInput>;
  };

  type PersonalDetailsJsonEdge = {
    next?: Maybe<PersonalDetailsJson>;
    node: PersonalDetailsJson;
    previous?: Maybe<PersonalDetailsJson>;
  };

  enum PersonalDetailsJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Contacts = 'contacts',
    ContactsLabel = 'contacts___label',
    ContactsLink = 'contacts___link',
    ContactsSortOrder = 'contacts___sortOrder',
    ContactsType = 'contacts___type',
    FullName = 'fullName',
    JobTitle = 'jobTitle',
    PersonalInformation = 'personalInformation',
    PersonalInformationLabel = 'personalInformation___label',
    PersonalInformationSortOrder = 'personalInformation___sortOrder',
    PersonalInformationValue = 'personalInformation___value',
    TwitterUsername = 'twitterUsername',
  }

  type PersonalDetailsJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    contacts?: Maybe<PersonalDetailsJsonContactsFilterListInput>;
    fullName?: Maybe<StringQueryOperatorInput>;
    jobTitle?: Maybe<StringQueryOperatorInput>;
    personalInformation?: Maybe<PersonalDetailsJsonPersonalInformationFilterListInput>;
    twitterUsername?: Maybe<StringQueryOperatorInput>;
  };

  type PersonalDetailsJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<PersonalDetailsJsonEdge>;
    nodes: Array<PersonalDetailsJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type PersonalDetailsJsonPersonalInformation = {
    label?: Maybe<Scalars['String']>;
    sortOrder?: Maybe<Scalars['Int']>;
    value?: Maybe<Scalars['String']>;
  };

  type PersonalDetailsJsonPersonalInformationFilterInput = {
    label?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
  };

  type PersonalDetailsJsonPersonalInformationFilterListInput = {
    elemMatch?: Maybe<PersonalDetailsJsonPersonalInformationFilterInput>;
  };

  type PersonalDetailsJsonSortInput = {
    fields?: Maybe<Array<Maybe<PersonalDetailsJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type Potrace = {
    turnPolicy?: Maybe<PotraceTurnPolicy>;
    turdSize?: Maybe<Scalars['Float']>;
    alphaMax?: Maybe<Scalars['Float']>;
    optCurve?: Maybe<Scalars['Boolean']>;
    optTolerance?: Maybe<Scalars['Float']>;
    threshold?: Maybe<Scalars['Int']>;
    blackOnWhite?: Maybe<Scalars['Boolean']>;
    color?: Maybe<Scalars['String']>;
    background?: Maybe<Scalars['String']>;
  };

  enum PotraceTurnPolicy {
    TurnpolicyBlack = 'TURNPOLICY_BLACK',
    TurnpolicyWhite = 'TURNPOLICY_WHITE',
    TurnpolicyLeft = 'TURNPOLICY_LEFT',
    TurnpolicyRight = 'TURNPOLICY_RIGHT',
    TurnpolicyMinority = 'TURNPOLICY_MINORITY',
    TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  }

  type Query = {
    file?: Maybe<File>;
    allFile: FileConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp: ImageSharpConnection;
    themeJson?: Maybe<ThemeJson>;
    allThemeJson: ThemeJsonConnection;
    toolboxJson?: Maybe<ToolboxJson>;
    allToolboxJson: ToolboxJsonConnection;
    personalDetailsJson?: Maybe<PersonalDetailsJson>;
    allPersonalDetailsJson: PersonalDetailsJsonConnection;
    educationJson?: Maybe<EducationJson>;
    allEducationJson: EducationJsonConnection;
    skillsJson?: Maybe<SkillsJson>;
    allSkillsJson: SkillsJsonConnection;
    languagesJson?: Maybe<LanguagesJson>;
    allLanguagesJson: LanguagesJsonConnection;
    experiencesJson?: Maybe<ExperiencesJson>;
    allExperiencesJson: ExperiencesJsonConnection;
    interestsJson?: Maybe<InterestsJson>;
    allInterestsJson: InterestsJsonConnection;
    siteBuildMetadata?: Maybe<SiteBuildMetadata>;
    allSiteBuildMetadata: SiteBuildMetadataConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
  };

  type QueryFileArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childrenInterestsJson?: Maybe<InterestsJsonFilterListInput>;
    childrenExperiencesJson?: Maybe<ExperiencesJsonFilterListInput>;
    childrenLanguagesJson?: Maybe<LanguagesJsonFilterListInput>;
    childrenSkillsJson?: Maybe<SkillsJsonFilterListInput>;
    childrenEducationJson?: Maybe<EducationJsonFilterListInput>;
    childPersonalDetailsJson?: Maybe<PersonalDetailsJsonFilterInput>;
    childrenToolboxJson?: Maybe<ToolboxJsonFilterListInput>;
    childThemeJson?: Maybe<ThemeJsonFilterInput>;
  };

  type QueryAllFileArgs = {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryDirectoryArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type QueryAllDirectoryArgs = {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySitePageArgs = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
  };

  type QueryAllSitePageArgs = {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySiteArgs = {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type QueryAllSiteArgs = {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryImageSharpArgs = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type QueryAllImageSharpArgs = {
    filter?: Maybe<ImageSharpFilterInput>;
    sort?: Maybe<ImageSharpSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryThemeJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    colors?: Maybe<ThemeJsonColorsFilterInput>;
    fonts?: Maybe<ThemeJsonFontsFilterInput>;
    fontWeights?: Maybe<ThemeJsonFontWeightsFilterInput>;
  };

  type QueryAllThemeJsonArgs = {
    filter?: Maybe<ThemeJsonFilterInput>;
    sort?: Maybe<ThemeJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryToolboxJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    img?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
  };

  type QueryAllToolboxJsonArgs = {
    filter?: Maybe<ToolboxJsonFilterInput>;
    sort?: Maybe<ToolboxJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryPersonalDetailsJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    contacts?: Maybe<PersonalDetailsJsonContactsFilterListInput>;
    fullName?: Maybe<StringQueryOperatorInput>;
    jobTitle?: Maybe<StringQueryOperatorInput>;
    personalInformation?: Maybe<PersonalDetailsJsonPersonalInformationFilterListInput>;
    twitterUsername?: Maybe<StringQueryOperatorInput>;
  };

  type QueryAllPersonalDetailsJsonArgs = {
    filter?: Maybe<PersonalDetailsJsonFilterInput>;
    sort?: Maybe<PersonalDetailsJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryEducationJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    city?: Maybe<StringQueryOperatorInput>;
    countryCode?: Maybe<StringQueryOperatorInput>;
    issueDate?: Maybe<DateQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    school?: Maybe<StringQueryOperatorInput>;
  };

  type QueryAllEducationJsonArgs = {
    filter?: Maybe<EducationJsonFilterInput>;
    sort?: Maybe<EducationJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySkillsJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
    items?: Maybe<SkillsJsonItemsFilterListInput>;
  };

  type QueryAllSkillsJsonArgs = {
    filter?: Maybe<SkillsJsonFilterInput>;
    sort?: Maybe<SkillsJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryLanguagesJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    img?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    proficiencyLevel?: Maybe<FloatQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
  };

  type QueryAllLanguagesJsonArgs = {
    filter?: Maybe<LanguagesJsonFilterInput>;
    sort?: Maybe<LanguagesJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryExperiencesJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    company?: Maybe<StringQueryOperatorInput>;
    companySector?: Maybe<StringQueryOperatorInput>;
    endDate?: Maybe<DateQueryOperatorInput>;
    img?: Maybe<StringQueryOperatorInput>;
    projects?: Maybe<ExperiencesJsonProjectsFilterListInput>;
    startDate?: Maybe<DateQueryOperatorInput>;
  };

  type QueryAllExperiencesJsonArgs = {
    filter?: Maybe<ExperiencesJsonFilterInput>;
    sort?: Maybe<ExperiencesJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryInterestsJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
  };

  type QueryAllInterestsJsonArgs = {
    filter?: Maybe<InterestsJsonFilterInput>;
    sort?: Maybe<InterestsJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySiteBuildMetadataArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
  };

  type QueryAllSiteBuildMetadataArgs = {
    filter?: Maybe<SiteBuildMetadataFilterInput>;
    sort?: Maybe<SiteBuildMetadataSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySitePluginArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type QueryAllSitePluginArgs = {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type Site = Node & {
    buildTime?: Maybe<Scalars['Date']>;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars['Int']>;
    host?: Maybe<Scalars['String']>;
    polyfill?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type SiteBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadata = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    buildTime?: Maybe<Scalars['Date']>;
  };

  type SiteBuildMetadataBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteBuildMetadataGroupConnection>;
  };

  type SiteBuildMetadataConnectionDistinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataEdge = {
    next?: Maybe<SiteBuildMetadata>;
    node: SiteBuildMetadata;
    previous?: Maybe<SiteBuildMetadata>;
  };

  enum SiteBuildMetadataFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    BuildTime = 'buildTime',
  }

  type SiteBuildMetadataFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
  };

  type SiteBuildMetadataGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataSortInput = {
    fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type SiteConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteGroupConnection>;
  };

  type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
  };

  enum SiteFieldsEnum {
    BuildTime = 'buildTime',
    SiteMetadataAppName = 'siteMetadata___appName',
    SiteMetadataAuthor = 'siteMetadata___author',
    SiteMetadataDescription = 'siteMetadata___description',
    SiteMetadataKeywords = 'siteMetadata___keywords',
    SiteMetadataLicense = 'siteMetadata___license',
    SiteMetadataRepositoryType = 'siteMetadata___repository___type',
    SiteMetadataRepositoryUrl = 'siteMetadata___repository___url',
    SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
    SiteMetadataTitle = 'siteMetadata___title',
    SiteMetadataTwitterUsername = 'siteMetadata___twitterUsername',
    SiteMetadataVersion = 'siteMetadata___version',
    Port = 'port',
    Host = 'host',
    Polyfill = 'polyfill',
    PathPrefix = 'pathPrefix',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
  }

  type SiteFilterInput = {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type SiteGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SitePage = Node & {
    path: Scalars['String'];
    component: Scalars['String'];
    internalComponentName: Scalars['String'];
    componentChunkName: Scalars['String'];
    matchPath?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars['String']>;
    componentPath?: Maybe<Scalars['String']>;
  };

  type SitePageConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePageGroupConnection>;
  };

  type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
  };

  type SitePageEdge = {
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
  };

  enum SitePageFieldsEnum {
    Path = 'path',
    Component = 'component',
    InternalComponentName = 'internalComponentName',
    ComponentChunkName = 'componentChunkName',
    MatchPath = 'matchPath',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    PluginCreatorId = 'pluginCreator___id',
    PluginCreatorParentId = 'pluginCreator___parent___id',
    PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
    PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
    PluginCreatorParentChildren = 'pluginCreator___parent___children',
    PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
    PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
    PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
    PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
    PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
    PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
    PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
    PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
    PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
    PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
    PluginCreatorChildren = 'pluginCreator___children',
    PluginCreatorChildrenId = 'pluginCreator___children___id',
    PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
    PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
    PluginCreatorChildrenChildren = 'pluginCreator___children___children',
    PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
    PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
    PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
    PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
    PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
    PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
    PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
    PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
    PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
    PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
    PluginCreatorInternalContent = 'pluginCreator___internal___content',
    PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
    PluginCreatorInternalDescription = 'pluginCreator___internal___description',
    PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
    PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
    PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
    PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
    PluginCreatorInternalType = 'pluginCreator___internal___type',
    PluginCreatorResolve = 'pluginCreator___resolve',
    PluginCreatorName = 'pluginCreator___name',
    PluginCreatorVersion = 'pluginCreator___version',
    PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
    PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
    PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
    PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
    PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
    PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
    PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
    PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
    PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
    PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
    PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
    PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
    PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
    PluginCreatorPluginOptionsComponents = 'pluginCreator___pluginOptions___components',
    PluginCreatorPluginOptionsPages = 'pluginCreator___pluginOptions___pages',
    PluginCreatorPluginOptionsStyles = 'pluginCreator___pluginOptions___styles',
    PluginCreatorPluginOptionsUtils = 'pluginCreator___pluginOptions___utils',
    PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
    PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
    PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
    PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
    PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
    PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
    PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
    PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
    PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
    PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
    PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
    PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
    PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
    PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
    PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
    PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
    PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
    PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
    PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
    PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
    PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
    PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
    PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
  }

  type SitePageFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SitePageSortInput = {
    fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type SitePlugin = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    resolve?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
    packageJson?: Maybe<SitePluginPackageJson>;
  };

  type SitePluginConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePluginGroupConnection>;
  };

  type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
  };

  enum SitePluginFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Resolve = 'resolve',
    Name = 'name',
    Version = 'version',
    PluginOptionsDisplay = 'pluginOptions___display',
    PluginOptionsFonts = 'pluginOptions___fonts',
    PluginOptionsBackgroundColor = 'pluginOptions___background_color',
    PluginOptionsIcon = 'pluginOptions___icon',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsShortName = 'pluginOptions___short_name',
    PluginOptionsStartUrl = 'pluginOptions___start_url',
    PluginOptionsThemeColor = 'pluginOptions___theme_color',
    PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
    PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
    PluginOptionsLegacy = 'pluginOptions___legacy',
    PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
    PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
    PluginOptionsComponents = 'pluginOptions___components',
    PluginOptionsPages = 'pluginOptions___pages',
    PluginOptionsStyles = 'pluginOptions___styles',
    PluginOptionsUtils = 'pluginOptions___utils',
    PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
    PluginOptionsIsTsx = 'pluginOptions___isTSX',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDependenciesName = 'packageJson___dependencies___name',
    PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
    PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
    PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
    PackageJsonKeywords = 'packageJson___keywords',
  }

  type SitePluginFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type SitePluginGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJson = {
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    main?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  };

  type SitePluginPackageJsonDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
  };

  type SitePluginPackageJsonDevDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
  };

  type SitePluginPackageJsonFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
  };

  type SitePluginPluginOptions = {
    display?: Maybe<Scalars['String']>;
    fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
    background_color?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    short_name?: Maybe<Scalars['String']>;
    start_url?: Maybe<Scalars['String']>;
    theme_color?: Maybe<Scalars['String']>;
    cache_busting_mode?: Maybe<Scalars['String']>;
    include_favicon?: Maybe<Scalars['Boolean']>;
    legacy?: Maybe<Scalars['Boolean']>;
    theme_color_in_head?: Maybe<Scalars['Boolean']>;
    cacheDigest?: Maybe<Scalars['String']>;
    components?: Maybe<Scalars['String']>;
    pages?: Maybe<Scalars['String']>;
    styles?: Maybe<Scalars['String']>;
    utils?: Maybe<Scalars['String']>;
    allExtensions?: Maybe<Scalars['Boolean']>;
    isTSX?: Maybe<Scalars['Boolean']>;
    path?: Maybe<Scalars['String']>;
    pathCheck?: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsFilterInput = {
    display?: Maybe<StringQueryOperatorInput>;
    fonts?: Maybe<StringQueryOperatorInput>;
    background_color?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    short_name?: Maybe<StringQueryOperatorInput>;
    start_url?: Maybe<StringQueryOperatorInput>;
    theme_color?: Maybe<StringQueryOperatorInput>;
    cache_busting_mode?: Maybe<StringQueryOperatorInput>;
    include_favicon?: Maybe<BooleanQueryOperatorInput>;
    legacy?: Maybe<BooleanQueryOperatorInput>;
    theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
    cacheDigest?: Maybe<StringQueryOperatorInput>;
    components?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<StringQueryOperatorInput>;
    styles?: Maybe<StringQueryOperatorInput>;
    utils?: Maybe<StringQueryOperatorInput>;
    allExtensions?: Maybe<BooleanQueryOperatorInput>;
    isTSX?: Maybe<BooleanQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginSortInput = {
    fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type SiteSiteMetadata = {
    appName?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
    license?: Maybe<Scalars['String']>;
    repository?: Maybe<SiteSiteMetadataRepository>;
    siteUrl?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    twitterUsername?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataFilterInput = {
    appName?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    repository?: Maybe<SiteSiteMetadataRepositoryFilterInput>;
    siteUrl?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    twitterUsername?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SiteSiteMetadataRepository = {
    type?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataRepositoryFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type SkillsJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    name?: Maybe<Scalars['String']>;
    sortOrder?: Maybe<Scalars['Int']>;
    items?: Maybe<Array<Maybe<SkillsJsonItems>>>;
  };

  type SkillsJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SkillsJsonEdge>;
    nodes: Array<SkillsJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SkillsJsonGroupConnection>;
  };

  type SkillsJsonConnectionDistinctArgs = {
    field: SkillsJsonFieldsEnum;
  };

  type SkillsJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SkillsJsonFieldsEnum;
  };

  type SkillsJsonEdge = {
    next?: Maybe<SkillsJson>;
    node: SkillsJson;
    previous?: Maybe<SkillsJson>;
  };

  enum SkillsJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Name = 'name',
    SortOrder = 'sortOrder',
    Items = 'items',
    ItemsName = 'items___name',
    ItemsProficiencyLevel = 'items___proficiencyLevel',
    ItemsSortOrder = 'items___sortOrder',
    ItemsSection = 'items___section',
  }

  type SkillsJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
    items?: Maybe<SkillsJsonItemsFilterListInput>;
  };

  type SkillsJsonFilterListInput = {
    elemMatch?: Maybe<SkillsJsonFilterInput>;
  };

  type SkillsJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SkillsJsonEdge>;
    nodes: Array<SkillsJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SkillsJsonItems = {
    name?: Maybe<Scalars['String']>;
    proficiencyLevel?: Maybe<Scalars['Int']>;
    sortOrder?: Maybe<Scalars['Int']>;
    section?: Maybe<Scalars['String']>;
  };

  type SkillsJsonItemsFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    proficiencyLevel?: Maybe<IntQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
    section?: Maybe<StringQueryOperatorInput>;
  };

  type SkillsJsonItemsFilterListInput = {
    elemMatch?: Maybe<SkillsJsonItemsFilterInput>;
  };

  type SkillsJsonSortInput = {
    fields?: Maybe<Array<Maybe<SkillsJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC',
  }

  type StringQueryOperatorInput = {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
  };

  type ThemeColors = {
    background?: Maybe<Scalars['String']>;
    body1?: Maybe<Scalars['String']>;
    body2?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    dark?: Maybe<Scalars['String']>;
    error?: Maybe<Scalars['String']>;
    info?: Maybe<Scalars['String']>;
    primary?: Maybe<Scalars['String']>;
    secondary?: Maybe<Scalars['String']>;
    subtitle?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
    white?: Maybe<Scalars['String']>;
  };

  type ThemeJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    colors?: Maybe<ThemeJsonColors>;
    fonts?: Maybe<ThemeJsonFonts>;
    fontWeights?: Maybe<ThemeJsonFontWeights>;
  };

  type ThemeJsonColors = {
    dark?: Maybe<ThemeJsonColorsDark>;
    light?: Maybe<ThemeJsonColorsLight>;
  };

  type ThemeJsonColorsDark = ThemeColors & {
    background?: Maybe<Scalars['String']>;
    body1?: Maybe<Scalars['String']>;
    body2?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    dark?: Maybe<Scalars['String']>;
    error?: Maybe<Scalars['String']>;
    info?: Maybe<Scalars['String']>;
    primary?: Maybe<Scalars['String']>;
    secondary?: Maybe<Scalars['String']>;
    subtitle?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
    white?: Maybe<Scalars['String']>;
  };

  type ThemeJsonColorsDarkFilterInput = {
    background?: Maybe<StringQueryOperatorInput>;
    body1?: Maybe<StringQueryOperatorInput>;
    body2?: Maybe<StringQueryOperatorInput>;
    caption?: Maybe<StringQueryOperatorInput>;
    dark?: Maybe<StringQueryOperatorInput>;
    error?: Maybe<StringQueryOperatorInput>;
    info?: Maybe<StringQueryOperatorInput>;
    primary?: Maybe<StringQueryOperatorInput>;
    secondary?: Maybe<StringQueryOperatorInput>;
    subtitle?: Maybe<StringQueryOperatorInput>;
    success?: Maybe<StringQueryOperatorInput>;
    text?: Maybe<StringQueryOperatorInput>;
    white?: Maybe<StringQueryOperatorInput>;
  };

  type ThemeJsonColorsFilterInput = {
    dark?: Maybe<ThemeJsonColorsDarkFilterInput>;
    light?: Maybe<ThemeJsonColorsLightFilterInput>;
  };

  type ThemeJsonColorsLight = ThemeColors & {
    background?: Maybe<Scalars['String']>;
    body1?: Maybe<Scalars['String']>;
    body2?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    dark?: Maybe<Scalars['String']>;
    error?: Maybe<Scalars['String']>;
    info?: Maybe<Scalars['String']>;
    primary?: Maybe<Scalars['String']>;
    secondary?: Maybe<Scalars['String']>;
    subtitle?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
    white?: Maybe<Scalars['String']>;
  };

  type ThemeJsonColorsLightFilterInput = {
    background?: Maybe<StringQueryOperatorInput>;
    body1?: Maybe<StringQueryOperatorInput>;
    body2?: Maybe<StringQueryOperatorInput>;
    caption?: Maybe<StringQueryOperatorInput>;
    dark?: Maybe<StringQueryOperatorInput>;
    error?: Maybe<StringQueryOperatorInput>;
    info?: Maybe<StringQueryOperatorInput>;
    primary?: Maybe<StringQueryOperatorInput>;
    secondary?: Maybe<StringQueryOperatorInput>;
    subtitle?: Maybe<StringQueryOperatorInput>;
    success?: Maybe<StringQueryOperatorInput>;
    text?: Maybe<StringQueryOperatorInput>;
    white?: Maybe<StringQueryOperatorInput>;
  };

  type ThemeJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ThemeJsonEdge>;
    nodes: Array<ThemeJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ThemeJsonGroupConnection>;
  };

  type ThemeJsonConnectionDistinctArgs = {
    field: ThemeJsonFieldsEnum;
  };

  type ThemeJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ThemeJsonFieldsEnum;
  };

  type ThemeJsonEdge = {
    next?: Maybe<ThemeJson>;
    node: ThemeJson;
    previous?: Maybe<ThemeJson>;
  };

  enum ThemeJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ColorsDarkBackground = 'colors___dark___background',
    ColorsDarkBody1 = 'colors___dark___body1',
    ColorsDarkBody2 = 'colors___dark___body2',
    ColorsDarkCaption = 'colors___dark___caption',
    ColorsDarkDark = 'colors___dark___dark',
    ColorsDarkError = 'colors___dark___error',
    ColorsDarkInfo = 'colors___dark___info',
    ColorsDarkPrimary = 'colors___dark___primary',
    ColorsDarkSecondary = 'colors___dark___secondary',
    ColorsDarkSubtitle = 'colors___dark___subtitle',
    ColorsDarkSuccess = 'colors___dark___success',
    ColorsDarkText = 'colors___dark___text',
    ColorsDarkWhite = 'colors___dark___white',
    ColorsLightBackground = 'colors___light___background',
    ColorsLightBody1 = 'colors___light___body1',
    ColorsLightBody2 = 'colors___light___body2',
    ColorsLightCaption = 'colors___light___caption',
    ColorsLightDark = 'colors___light___dark',
    ColorsLightError = 'colors___light___error',
    ColorsLightInfo = 'colors___light___info',
    ColorsLightPrimary = 'colors___light___primary',
    ColorsLightSecondary = 'colors___light___secondary',
    ColorsLightSubtitle = 'colors___light___subtitle',
    ColorsLightSuccess = 'colors___light___success',
    ColorsLightText = 'colors___light___text',
    ColorsLightWhite = 'colors___light___white',
    FontsMain = 'fonts___main',
    FontsTitle = 'fonts___title',
    FontWeightsBold = 'fontWeights___bold',
    FontWeightsBolder = 'fontWeights___bolder',
    FontWeightsRegular = 'fontWeights___regular',
  }

  type ThemeJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    colors?: Maybe<ThemeJsonColorsFilterInput>;
    fonts?: Maybe<ThemeJsonFontsFilterInput>;
    fontWeights?: Maybe<ThemeJsonFontWeightsFilterInput>;
  };

  type ThemeJsonFonts = {
    main?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
  };

  type ThemeJsonFontsFilterInput = {
    main?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

  type ThemeJsonFontWeights = {
    bold?: Maybe<Scalars['Int']>;
    bolder?: Maybe<Scalars['Int']>;
    regular?: Maybe<Scalars['Int']>;
  };

  type ThemeJsonFontWeightsFilterInput = {
    bold?: Maybe<IntQueryOperatorInput>;
    bolder?: Maybe<IntQueryOperatorInput>;
    regular?: Maybe<IntQueryOperatorInput>;
  };

  type ThemeJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ThemeJsonEdge>;
    nodes: Array<ThemeJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type ThemeJsonSortInput = {
    fields?: Maybe<Array<Maybe<ThemeJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type ToolboxJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    img?: Maybe<Scalars['String']>;
    link?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    sortOrder?: Maybe<Scalars['Int']>;
  };

  type ToolboxJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ToolboxJsonEdge>;
    nodes: Array<ToolboxJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ToolboxJsonGroupConnection>;
  };

  type ToolboxJsonConnectionDistinctArgs = {
    field: ToolboxJsonFieldsEnum;
  };

  type ToolboxJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ToolboxJsonFieldsEnum;
  };

  type ToolboxJsonEdge = {
    next?: Maybe<ToolboxJson>;
    node: ToolboxJson;
    previous?: Maybe<ToolboxJson>;
  };

  enum ToolboxJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Img = 'img',
    Link = 'link',
    Name = 'name',
    SortOrder = 'sortOrder',
  }

  type ToolboxJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    img?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
  };

  type ToolboxJsonFilterListInput = {
    elemMatch?: Maybe<ToolboxJsonFilterInput>;
  };

  type ToolboxJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ToolboxJsonEdge>;
    nodes: Array<ToolboxJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type ToolboxJsonSortInput = {
    fields?: Maybe<Array<Maybe<ToolboxJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

  type GatsbyImageSharpFixed_TracedSvgFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
  >;

  type GatsbyImageSharpFixed_WithWebpFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >;

  type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >;

  type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

  type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >;

  type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

  type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
    maxHeight: ImageSharpFluid['presentationHeight'];
    maxWidth: ImageSharpFluid['presentationWidth'];
  };

  type GatsbyImageSharpFluid_TracedSvgFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >;

  type GatsbyImageSharpFluid_WithWebpFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >;

  type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >;

  type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

  type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >;

  type GatsbyImageSharpResolutionsFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
  >;

  type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
  >;

  type GatsbyImageSharpResolutions_WithWebpFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >;

  type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >;

  type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet'
  >;

  type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >;

  type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

  type GatsbyImageSharpSizes_TracedSvgFragment = Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >;

  type GatsbyImageSharpSizes_WithWebpFragment = Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >;

  type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >;

  type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

  type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >;

  type LabeledIconsBlockDataQueryVariables = Exact<{ [key: string]: never }>;

  type LabeledIconsBlockDataQuery = {
    imgNodes: {
      nodes: Array<{ fixed?: Maybe<Pick<ImageSharpFixed, 'originalName'> & GatsbyImageSharpFixed_WithWebpFragment> }>;
    };
  };

  type SeoDataQueryVariables = Exact<{ [key: string]: never }>;

  type SeoDataQuery = {
    banner?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<Pick<ImageSharpFixed, 'src'>> }> }>;
    site?: Maybe<{
      siteMetadata?: Maybe<
        Pick<SiteSiteMetadata, 'description' | 'keywords' | 'siteUrl' | 'title' | 'twitterUsername'>
      >;
    }>;
  };

  type SideMenuDataQueryVariables = Exact<{ [key: string]: never }>;

  type SideMenuDataQuery = { imageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> };

  type ThemeDataQueryVariables = Exact<{ [key: string]: never }>;

  type ThemeDataQuery = {
    themeJson?: Maybe<{
      colors?: Maybe<{
        dark?: Maybe<ThemeColors_ThemeJsonColorsDark_Fragment>;
        light?: Maybe<ThemeColors_ThemeJsonColorsLight_Fragment>;
      }>;
      fontWeights?: Maybe<Pick<ThemeJsonFontWeights, 'bolder' | 'bold' | 'regular'>>;
      fonts?: Maybe<Pick<ThemeJsonFonts, 'main' | 'title'>>;
    }>;
  };

  type PortraitDataQueryVariables = Exact<{ [key: string]: never }>;

  type PortraitDataQuery = { imageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> };

  type DetailsDataQueryVariables = Exact<{ [key: string]: never }>;

  type DetailsDataQuery = {
    details?: Maybe<
      Pick<PersonalDetailsJson, 'jobTitle'> & {
        contacts?: Maybe<Array<Maybe<Pick<PersonalDetailsJsonContacts, 'label' | 'link' | 'sortOrder' | 'type'>>>>;
        personalInformation?: Maybe<
          Array<Maybe<Pick<PersonalDetailsJsonPersonalInformation, 'label' | 'sortOrder' | 'value'>>>
        >;
      }
    >;
  };

  type EducationDataQueryVariables = Exact<{ [key: string]: never }>;

  type EducationDataQuery = {
    degreeNodes: { nodes: Array<Pick<EducationJson, 'city' | 'countryCode' | 'issueDate' | 'name' | 'school'>> };
  };

  type ExperienceDataQueryVariables = Exact<{ [key: string]: never }>;

  type ExperienceDataQuery = {
    companyImgNodes: {
      nodes: Array<{ fixed?: Maybe<Pick<ImageSharpFixed, 'originalName'> & GatsbyImageSharpFixed_WithWebpFragment> }>;
    };
    experienceNodes: {
      nodes: Array<
        Pick<ExperiencesJson, 'company' | 'companySector' | 'endDate' | 'img' | 'startDate'> & {
          projects?: Maybe<
            Array<
              Maybe<
                Pick<
                  ExperiencesJsonProjects,
                  'client' | 'clientSector' | 'description' | 'name' | 'tasks' | 'technologies'
                >
              >
            >
          >;
        }
      >;
    };
  };

  type FooterDataQueryVariables = Exact<{ [key: string]: never }>;

  type FooterDataQuery = {
    gatsbyImg?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }>;
    site?: Maybe<{
      siteMetadata?: Maybe<
        Pick<SiteSiteMetadata, 'appName' | 'version'> & { repository?: Maybe<Pick<SiteSiteMetadataRepository, 'url'>> }
      >;
    }>;
    styledComponentsImg?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }>;
  };

  type HeaderDataQueryVariables = Exact<{ [key: string]: never }>;

  type HeaderDataQuery = {
    flagImgNodes: {
      nodes: Array<{ fluid?: Maybe<Pick<ImageSharpFluid, 'originalName'> & GatsbyImageSharpFluid_WithWebpFragment> }>;
    };
    languageNodes: { nodes: Array<Pick<LanguagesJson, 'img' | 'name' | 'proficiencyLevel' | 'sortOrder'>> };
    personalDetailsJson?: Maybe<Pick<PersonalDetailsJson, 'fullName'>>;
  };

  type InterestsDataQueryVariables = Exact<{ [key: string]: never }>;

  type InterestsDataQuery = { interestNodes: { nodes: Array<Pick<InterestsJson, 'name' | 'sortOrder'>> } };

  type SkillsDataQueryVariables = Exact<{ [key: string]: never }>;

  type SkillsDataQuery = {
    skillNodes: {
      nodes: Array<
        Pick<SkillsJson, 'name' | 'sortOrder'> & {
          items?: Maybe<Array<Maybe<Pick<SkillsJsonItems, 'name' | 'proficiencyLevel' | 'section' | 'sortOrder'>>>>;
        }
      >;
    };
  };

  type ToolboxDataQueryVariables = Exact<{ [key: string]: never }>;

  type ToolboxDataQuery = { toolNodes: { nodes: Array<Pick<ToolboxJson, 'img' | 'link' | 'name' | 'sortOrder'>> } };

  type IndexDataQueryVariables = Exact<{ [key: string]: never }>;

  type IndexDataQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'description' | 'keywords'>> }> };

  type ThemeColors_ThemeJsonColorsDark_Fragment = Pick<
    ThemeJsonColorsDark,
    | 'background'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'dark'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'subtitle'
    | 'success'
    | 'text'
    | 'white'
  >;

  type ThemeColors_ThemeJsonColorsLight_Fragment = Pick<
    ThemeJsonColorsLight,
    | 'background'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'dark'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'subtitle'
    | 'success'
    | 'text'
    | 'white'
  >;

  type ThemeColorsFragment = ThemeColors_ThemeJsonColorsDark_Fragment | ThemeColors_ThemeJsonColorsLight_Fragment;
}
