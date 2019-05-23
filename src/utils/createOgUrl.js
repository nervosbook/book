import { urlRoot } from 'site-constants';

export default (slug) => {
  return slug == null ? null : `${urlRoot}/${slug.replace(/^\//, '')}`;
}
