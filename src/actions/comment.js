export const postComment = (payload) => ({
  type: 'MIDDLEWARE_CREATE_COMMENT',
  payload
});

export const deleteComment = (payload) => ({
  type: 'MIDDLEWARE_DELETE_COMMENT',
  payload
});

export const getComments = () => ({
  type: 'MIDDLEWARE_GET_COMMENTS'
});
