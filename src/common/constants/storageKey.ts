import { StorageKey as FWStorageKey } from 'one-frontend-framework';

/**
 * For store local storage/ session storage/ cookies  key
 */
export class StorageKey extends FWStorageKey {
    public static readonly authObject = 'ref_auth_react-application';
    public static readonly authObjectProfile = 'ref_auth_profile_react-application';
}