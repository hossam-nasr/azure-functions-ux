import { ArmArray } from '../../../models/arm-obj';
import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { ScmType, BuildProvider } from '../../../models/site/config';
import moment from 'moment';
import { Uri } from 'monaco-editor';
import { GitHubUser } from '../../../models/github';
import { IDropdownOption, IChoiceGroupOption, MessageBarType } from '@fluentui/react';
import { BitbucketUser } from '../../../models/bitbucket';
import { RepoTypeOptions } from '../../../models/external';
import { OneDriveUser } from '../../../models/onedrive';
import { DropboxUser } from '../../../models/dropbox';
import { KeyValue } from '../../../models/portal-models';
import DeploymentCenterData from './DeploymentCenter.data';
import { IDeploymentCenterContext } from './DeploymentCenterContext';
import PortalCommunicator from '../../../portal-communicator';

export enum SourceControlOptions {
  GitHub = 'github',
  Bitbucket = 'bitbucket',
  OneDrive = 'onedrive',
  Dropbox = 'dropbox',
}

export enum ContainerOptions {
  docker = 'docker',
  compose = 'compose',
}

export enum ContainerRegistrySources {
  acr = 'acr',
  docker = 'docker',
  privateRegistry = 'privateRegistry',
}

export enum ContainerDockerAccessTypes {
  public = 'public',
  private = 'private',
}

export enum SettingOption {
  on = 'on',
  off = 'off',
}

export enum DeploymentStatus {
  Pending,
  Building,
  Deploying,
  Failed,
  Success,
}

export enum WorkflowOption {
  None = 'none',
  Overwrite = 'overwrite',
  Add = 'add',
  UseAvailableWorkflowConfigs = 'useAvailableWorkflowConfigs',
  UseExistingWorkflowConfig = 'useExistingWorkflowConfig',
}

export enum WorkflowFileDeleteOptions {
  Preserve = 'Preserve',
  Delete = 'Delete',
}

export enum RuntimeStackOptions {
  Java = 'java',
  Python = 'python',
  DotNetCore = 'dotnetcore',
  Ruby = 'ruby',
  Java11 = 'java-11',
  Java8 = 'java-8',
  JBossEAP = 'jbosseap',
  Node = 'node',
  PHP = 'php',
  AspDotNet = 'asp.net',
  Dotnet = 'dotnet',
  DotnetIsolated = 'dotnet-isolated',
  Go = 'go',
}

export enum RuntimeStackDisplayNames {
  Java = 'Java',
  Python = 'Python',
  DotNetCore = '.NET Core',
  Ruby = 'Ruby',
  Java11 = 'Java 11',
  Java8 = 'Java 8',
  Node = 'Node',
  PHP = 'PHP',
  AspDotNet = 'ASP.NET',
  Dotnet = '.NET',
  DotnetIsolated = '.Net Isolated',
  Go = 'Go',
}

export enum RuntimeVersionOptions {
  Java17 = 'java17',
  Java11 = 'java11',
  Java8 = 'java8',
  Java8Linux = 'jre8',
}

export enum RuntimeVersionDisplayNames {
  Java17 = 'Java 17',
  Java11 = 'Java 11',
  Java8 = 'Java 8',
}

export enum TargetAzDevDeployment {
  Devfabric = 'devfabric',
  Preflight = 'pf',
  SU2 = 'su2',
}

export enum GitHubActionRunConclusion {
  Success = 'success',
  Failure = 'failure',
  Cancelled = 'cancelled',
  Neutral = 'neutral',
  Skipped = 'skipped',
  TimedOut = 'timed_out',
  ActionRequired = 'action_required',
}

export enum JavaContainerDisplayNames {
  JavaSE = 'Java SE',
  Tomcat = 'Tomcat',
  JBoss = 'JBoss EAP',
}

export enum PublishType {
  Code = 'code',
  Container = 'container',
}

export enum AppType {
  WebApp = 'webapp',
  FunctionApp = 'functionapp',
}

export enum JavaContainers {
  JavaSE = 'java',
  Tomcat = 'tomcat',
  JBoss = 'jbosseap',
}

export enum DotnetRuntimeVersion {
  aspNetv4 = 'v4.0',
  aspNetv2 = 'v2.0',
}

export enum ACRCredentialType {
  adminCredentials = 'adminCredentials',
  managedIdentity = 'managedIdentity',
}

export enum ManagedIdentityType {
  systemAssigned = 'SystemAssigned',
  userAssigned = 'UserAssigned',
}

export interface AzureDevOpsUrl {
  Tfs: string;
  Sps: string;
  Aex: string;
  Rmo: string;
  PeDeploymentLevel: string;
  PeCollectionLevel: string;
}

export interface DevOpsAccount {
  AccountId: string;
  NamespaceId: string;
  AccountName: string;
  AccountType: number;
  AccountOwner: string;
  CreatedBy: string;
  CreatedDate: Date;
  AccountStatus: number;
  LastUpdatedBy: string;
  Properties: any;
  ForceMsaPassThrough: boolean;
  OrganizationName?: string;
  StatusReason?: string;
}

export interface DevOpsBuildDefinition {
  project: DevOpsProject;
  repository: DevOpsBuildDefinitionRepository;
}

export interface DevOpsBuildDefinitionRepository {
  url: string;
  name: string;
  defaultBranch: string;
}

export interface DevOpsProject {
  id: string;
  name: string;
}

export interface DevOpsRepository {
  id: string;
  name: string;
  remoteUrl: string;
  size: number;
  sshUrl: string;
  url: string;
  webUrl: string;
  project: DevOpsProject;
}

export interface DevOpsRepositories {
  count: number;
  value: DevOpsRepository[];
}

export interface DevOpsBranch {
  name: string;
  objectId: string;
  url: string;
}

export interface DevOpsBranches {
  count: number;
  value: DevOpsBranch[];
}

export interface AuthenticatedUserContext {
  authenticatedUser: AuthenticatedUser;
  authorizedUser: AuthorizedUser;
  instanceId: string;
  deploymentId: string;
  deploymentType: string;
  locationServiceData: LocationServiceData;
}

export interface AuthenticatedUser {
  id: string;
  descriptor: string;
  subjectDescriptor: string;
  providerDisplayName: string;
  isActive: boolean;
  properties: Properties;
  resourceVersion: number;
  metaTypeId: number;
}

export interface AuthorizedUser {
  id: string;
  descriptor: string;
  subjectDescriptor: string;
  providerDisplayName: string;
  isActive: boolean;
  properties: Properties;
  resourceVersion: number;
  metaTypeId: number;
}

export interface LocationServiceData {
  serviceOwner: string;
  defaultAccessMappingMoniker: string;
  lastChangeId: number;
  lastChangeId64: number;
}

export interface Properties {
  Account: unknown;
}

export interface DeploymentCenterDataLoaderProps extends TabbedComponent {
  resourceId: string;
  isDataRefreshing: boolean;
}

export interface RefreshableComponent {
  refresh: () => void;
  isDataRefreshing: boolean;
  isLogsDataRefreshing: boolean;
}

export interface TabbedComponent {
  tab?: string;
}

export type DeploymentCenterContainerProps = DeploymentCenterContainerLogsProps &
  DeploymentCenterFtpsProps &
  RefreshableComponent &
  TabbedComponent;

export type DeploymentCenterCodeProps = DeploymentCenterCodeLogsProps & DeploymentCenterFtpsProps & RefreshableComponent & TabbedComponent;

export type DeploymentCenterYupValidationSchemaType<
  T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData
> = Yup.ObjectSchema<Yup.Shape<object, DeploymentCenterFormData<T>>>;

export type DeploymentCenterFormData<
  T = DeploymentCenterCodeFormData | DeploymentCenterContainerFormData
> = DeploymentCenterCommonFormData & T;

export interface DeploymentCenterCommonFormData {
  publishingUsername: string;
  publishingPassword: string;
  publishingConfirmPassword: string;
  workflowOption: string;
  org: string;
  repo: string;
  branch: string;
  gitHubPublishProfileSecretGuid: string;
  externalRepoType: RepoTypeOptions;
  externalUsername?: string;
  externalPassword?: string;
  gitHubUser?: GitHubUser;
  bitbucketUser?: BitbucketUser;
  oneDriveUser?: OneDriveUser;
  dropboxUser?: DropboxUser;
  folder?: string;
  devOpsProjectName?: string;
  searchTerm?: string;
}

export interface AcrFormData {
  acrLoginServer: string;
  acrImage: string;
  acrTag: string;
  acrUsername: string;
  acrPassword: string;
  acrComposeYml: string;
  acrResourceId: string;
  acrLocation: string;
  acrCredentialType: string;
  acrManagedIdentityClientId: string;
  acrManagedIdentityPrincipalId: string;
  acrVnetImagePullSetting?: SettingOption;
}

export interface DockerHubFormData {
  dockerHubAccessType: ContainerDockerAccessTypes;
  dockerHubImageAndTag: string;
  dockerHubUsername: string;
  dockerHubPassword: string;
  dockerHubComposeYml: string;
}

export interface PrivateRegistryFormData {
  privateRegistryServerUrl: string;
  privateRegistryImageAndTag: string;
  privateRegistryUsername: string;
  privateRegistryPassword: string;
  privateRegistryComposeYml: string;
}

export interface DeploymentCenterContainerFormData extends AcrFormData, DockerHubFormData, PrivateRegistryFormData {
  option: ContainerOptions;
  registrySource: ContainerRegistrySources;
  scmType: ScmType;
  command: string;
  gitHubContainerUsernameSecretGuid: string;
  gitHubContainerPasswordSecretGuid: string;
  continuousDeploymentOption: SettingOption;
}

export interface DeploymentCenterCodeFormData {
  sourceProvider: ScmType;
  buildProvider: BuildProvider;
  runtimeStack: string;
  runtimeVersion: string;
  runtimeRecommendedVersion: string;
  javaContainer?: string;
}

export interface DeploymentCenterFieldProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData> {
  formProps: FormikProps<DeploymentCenterFormData<T>>;
  isGitHubActions?: boolean;
  isDataRefreshing?: boolean;
}

export interface DeploymentCenterGitHubWorkflowConfigSelectorProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData>
  extends DeploymentCenterFieldProps<T> {
  setGithubActionExistingWorkflowContents: (active: string) => void;
}

export interface DeploymentCenterContainerLogsProps {
  isLogsDataRefreshing: boolean;
  refresh: () => void;
  logs?: string;
}

export interface DeploymentCenterCodeLogsProps {
  isLogsDataRefreshing: boolean;
  refreshLogs: () => void;
  deployments?: ArmArray<DeploymentProperties>;
  deploymentsError?: string;
  goToSettings?: () => void;
}

export interface DeploymentCenterCodeLogsTimerProps {
  pauseTimer?: boolean;
  refreshLogs: () => void;
  deleteLogs: () => void;
}

export interface DeploymentCenterCommitLogsProps {
  dismissLogPanel: () => void;
  commitId?: string;
}

export interface DeploymentCenterGitHubWorkflowConfigPreviewProps {
  isPreviewFileButtonDisabled: boolean;
  getWorkflowFileContent: () => Promise<string>;
  workflowFilePath?: string;
  panelMessage?: string;
  panelMessageType?: MessageBarType;
}

export interface DeploymentCenterFtpsProps {
  isDataRefreshing?: boolean;
}

export interface DeploymentCenterFormProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData> {
  formData?: DeploymentCenterFormData<T>;
  formValidationSchema?: DeploymentCenterYupValidationSchemaType<T>;
}

export type DeploymentCenterContainerFormProps = DeploymentCenterContainerProps &
  DeploymentCenterFormProps<DeploymentCenterContainerFormData>;

export type DeploymentCenterContainerPivotProps = DeploymentCenterContainerFormProps &
  DeploymentCenterFieldProps<DeploymentCenterContainerFormData>;

export type DeploymentCenterCodeFormProps = DeploymentCenterCodeProps & DeploymentCenterFormProps<DeploymentCenterCodeFormData>;

export type DeploymentCenterCodePivotProps = DeploymentCenterCodeFormProps & DeploymentCenterFieldProps<DeploymentCenterCodeFormData>;

export interface DeploymentCenterCommandBarProps {
  isDataRefreshing: boolean;
  isDirty: boolean;
  isValid: boolean;
  isVstsBuildProvider: boolean;
  saveFunction: () => void;
  discardFunction: () => void;
  showPublishProfilePanel: () => void;
  redeploy?: () => void;
}

export interface DeploymentCenterCodeCommandBarProps extends DeploymentCenterFieldProps<DeploymentCenterCodeFormData> {
  isLoading: boolean;
  redeploy: () => void;
}

export interface DeploymentCenterContainerCommandBarProps extends DeploymentCenterFieldProps<DeploymentCenterContainerFormData> {
  isLoading: boolean;
}

export interface DeploymentCenterPublishProfilePanelProps {
  isPanelOpen: boolean;
  dismissPanel: () => void;
  resetApplicationPassword: () => void;
}

export interface DeploymentCenterPublishProfileCommandBarProps {
  resetApplicationPassword: () => void;
}

export interface DeploymentCenterGitHubProviderProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData>
  extends DeploymentCenterFieldProps<T> {
  authorizeAccount: () => void;
  organizationOptions: IDropdownOption[];
  repositoryOptions: IDropdownOption[];
  branchOptions: IDropdownOption[];
  loadingOrganizations: boolean;
  loadingRepositories: boolean;
  loadingBranches: boolean;
  accountStatusMessage?: string;
  accountUser?: GitHubUser;
  hasDeprecatedToken?: boolean;
  updateTokenSuccess?: boolean;
  resetToken?: () => void;
  clearComboBox?: KeyValue<boolean>;
}

export interface DeploymentCenterGitHubDisconnectProps {
  branch: string;
  org: string;
  repo: string;
  repoUrl: string;
  formProps: FormikProps<DeploymentCenterFormData<any>>;
}

export interface DeploymentCenterCodeBuildCalloutProps {
  selectedBuildChoice: BuildProvider;
  updateSelectedBuildChoiceOption: (e: any, option: BuildChoiceGroupOption) => void;
  calloutOkButtonDisabled: boolean;
  toggleIsCalloutVisible: () => void;
  updateSelectedBuild: () => void;
  formProps: FormikProps<DeploymentCenterFormData<any>>;
  runtimeStack: string;
  runtimeVersion: string;
}

export interface AuthorizationResult {
  timerId: NodeJS.Timeout;
  redirectUrl?: string;
}

export interface DeploymentProperties {
  id: string;
  status: DeploymentStatus;
  status_text: string;
  author_email: string;
  author: string;
  deployer: string;
  message: string;
  progress: string;
  received_time: string;
  start_time: string;
  complete: boolean;
  active: string;
  is_temp: boolean;
  is_readonly: boolean;
  url: Uri;
  log_url: Uri;
  site_name: string;
  end_time?: string;
  last_success_end_time?: string;
}

export interface KuduLogMessage {
  type: string;
  commitId?: string;
  buildId?: number;
  releaseId?: number;
  buildNumber?: string;
  releaseName?: string;
  repoProvider?: string;
  repoName?: string;
  collectionUrl?: string;
  teamProject?: string;
  prodAppName?: string;
  slotName?: string;
  sourceSlot?: string;
  targetSlot?: string;
  message?: string;
  VSTSRM_BuildDefinitionWebAccessUrl?: string;
  VSTSRM_ConfiguredCDEndPoint?: string;
  VSTSRM_BuildWebAccessUrl?: string;
  AppUrl?: string;
  SlotUrl?: string;
  VSTSRM_AccountUrl?: string;
  VSTSRM_RepoUrl?: string;
  VSTSRM_AccountId?: string;
  buildProjectUrl?: string;
  repositoryUrl?: string;
  branch?: string;
  teamProjectName?: string;
}

export interface UrlInfo {
  urlIcon?: string;
  urlText: string;
  url: string;
}

export interface DeploymentLogsItem {
  log_time: string;
  id: string;
  message: string;
  details_url: string;
}

export interface SourceControlProperties {
  deploymentRollbackEnabled: boolean;
  repoUrl: string;
  branch: string;
  isMercurial: boolean;
  isGitHubAction?: boolean;
}

export interface DateTimeObj {
  rawTime: moment.Moment;
}

export interface CodeDeploymentsRow {
  index: number;
  id: string;
  rawTime: moment.Moment;
  displayTime: string;
  commit: JSX.Element;
  message: string | JSX.Element;
  status: string;
  author: string;
}

export interface BuildChoiceGroupOption extends IChoiceGroupOption {
  buildType: BuildProvider;
}

export interface RuntimeStackSetting {
  runtimeStack: string;
  runtimeVersion: string;
}

export interface ContainerWorkflowInformation {
  fileName: string;
  content: string;
  publishingProfileSecretName: string;
  containerUsernameSecretName: string;
  containerPasswordSecretName: string;
}

export interface CodeWorkflowInformation {
  fileName: string;
  secretName: string;
  content: string;
}

export interface DeploymentDisconnectStatus {
  step: DeployDisconnectStep;
  isSuccessful: boolean;
  errorMessage?: string;
  error?: any;
}

export enum DeployDisconnectStep {
  DeleteWorkflowFile = 'DeleteWorkflowFile',
  ClearSCMSettings = 'ClearSCMSettings',
}

export interface WorkflowChoiceGroupOption extends IChoiceGroupOption {
  workflowDeleteChoice: WorkflowFileDeleteOptions;
}

export interface SiteSourceControlRequestBody {
  repoUrl: string;
  branch: string;
  isManualIntegration: boolean;
  isGitHubAction: boolean;
  isMercurial: boolean;
}
export interface SiteSourceControlGitHubActionsRequestBody {
  repoUrl: string;
  branch: string;
  isManualIntegration: boolean;
  isGitHubAction: boolean;
  deploymentRollbackEnabled: boolean;
  isMercurial: boolean;
  gitHubActionConfiguration: {
    generateWorkflowFile: boolean;
    workflowSettings: {
      appType: AppType;
      publishType: PublishType;
      os: string;
      workflowApiVersion: string;
      slotName: string;
      variables: KeyValue<string>;
      runtimeStack?: string;
    };
  };
}

export interface DeploymentCenterBitbucketProviderProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData>
  extends DeploymentCenterFieldProps<T> {
  authorizeAccount: () => void;
  organizationOptions: IDropdownOption[];
  repositoryOptions: IDropdownOption[];
  branchOptions: IDropdownOption[];
  loadingOrganizations: boolean;
  loadingRepositories: boolean;
  loadingBranches: boolean;
  accountStatusMessage?: string;
  accountUser?: BitbucketUser;
}

export interface DeploymentCenterContainerAcrSettingsProps extends DeploymentCenterFieldProps<DeploymentCenterContainerFormData> {
  fetchImages: (loginServer: string) => void;
  fetchTags: (image: string) => void;
  fetchRegistriesInSub(subscription: string);
  acrSubscriptionOptions: IDropdownOption[];
  acrRegistryOptions: IDropdownOption[];
  acrImageOptions: IDropdownOption[];
  acrTagOptions: IDropdownOption[];
  loadingRegistryOptions: boolean;
  loadingImageOptions: boolean;
  loadingTagOptions: boolean;
  acrSubscription: string;
  acrStatusMessage?: string;
  acrStatusMessageType?: MessageBarType;
  acrUseManagedIdentities: boolean;
  managedIdentityOptions: IDropdownOption[];
  loadingManagedIdentities: boolean;
  learnMoreLink?: string;
  openIdentityBlade: () => void;
  isVnetConfigured?: boolean;
  legacyVnetAppSetting?: string;
  defaultVnetImagePullSetting?: SettingOption;
}

export interface DeploymentCenterOneDriveProviderProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData>
  extends DeploymentCenterFieldProps<T> {
  authorizeAccount: () => void;
  folderOptions: IDropdownOption[];
  loadingFolders: boolean;
  accountStatusMessage?: string;
  accountUser?: OneDriveUser;
}

export interface DeploymentCenterDropboxProviderProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData>
  extends DeploymentCenterFieldProps<T> {
  authorizeAccount: () => void;
  folderOptions: IDropdownOption[];
  loadingFolders: boolean;
  accountStatusMessage?: string;
  accountUser?: DropboxUser;
}

export interface DeploymentCenterDevOpsProviderProps<T = DeploymentCenterContainerFormData | DeploymentCenterCodeFormData>
  extends DeploymentCenterFieldProps<T> {
  organizationOptions: IDropdownOption[];
  projectOptions: IDropdownOption[];
  repositoryOptions: IDropdownOption[];
  branchOptions: IDropdownOption[];
  loadingOrganizations: boolean;
  loadingProjects: boolean;
  loadingRepositories: boolean;
  loadingBranches: boolean;
  errorMessage?: string;
}
export interface GitHubActionsCodeDeploymentsRow {
  index: number;
  id: number | string;
  rawTime: moment.Moment;
  displayTime: string;
  commit: string;
  logSource: JSX.Element;
  message: string;
  status: JSX.Element;
  commitId: string;
  author: string;
  group: number;
}

export interface GitHubActionsRun {
  id: number;
  cancel_url: string;
  html_url: string;
  logs_url: string;
  workflow_id: number;
  status: string;
  conclusion: string;
  created_at: string;
  updated_at: string;
  run_number: number;
  head_commit: {
    id: string;
    author: {
      name: string;
      email: string;
    };
    message: string;
  };
}

export interface acrARGInfo {
  id: string;
  location: string;
  name: string;
  resourceGroup: string;
  subscriptionId: string;
  type: string;
}

export interface WorkflowFileUrlInfo {
  repoUrl: string;
  branch: string;
  workflowFileName: string;
}

export interface SearchTermObserverInfo {
  searchTerm: string | undefined;
  org: string;
  repo: string;
  setLoadingRepositories: React.Dispatch<React.SetStateAction<boolean>>;
  setRepositoryOptions: React.Dispatch<React.SetStateAction<IDropdownOption[]>>;
  fetchBranchOptions: (org: string, repo: string) => Promise<void>;
  setClearComboBox: React.Dispatch<React.SetStateAction<KeyValue<boolean>>>;
  repositoryUrl: string;
  deploymentCenterData: DeploymentCenterData;
  deploymentCenterContext: IDeploymentCenterContext;
  portalContext: PortalCommunicator;
  isGitHubActions: boolean | undefined;
}

export interface RoleAssignment {
  roleDefinitionId: string;
  principalId: string;
  scope: string;
  id: string;
  type: string;
  name: string;
}

export interface UserAssignedIdentity {
  clientId: string;
  principalId: string;
  name: string;
}
