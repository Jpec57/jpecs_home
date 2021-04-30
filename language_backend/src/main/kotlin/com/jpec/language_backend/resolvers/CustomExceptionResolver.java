package com.jpec.language_backend.resolvers;


// @Component
// public class CustomExceptionResolver extends AbstractHandlerExceptionResolver {

//     @Override
//     protected ModelAndView doResolveException(
//       HttpServletRequest request, 
//       HttpServletResponse response, 
//       Object handler, 
//       Exception ex) {
//         try {
//             if (ex instanceof IllegalArgumentException) {
//                 return handleIllegalArgument(
//                   (IllegalArgumentException) ex, response, handler);
//             }
//             //TODO
//         } catch (Exception handlerException) {
//             logger.warn("Handling of [" + ex.getClass().getName() + "] 
//               resulted in Exception", handlerException);
//         }
//         return null;
//     }

//     private ModelAndView 
//       handleIllegalArgument(IllegalArgumentException ex, HttpServletResponse response) 
//       throws IOException {
//         response.sendError(HttpServletResponse.SC_CONFLICT);
//         String accept = request.getHeader(HttpHeaders.ACCEPT);
//         //TODO
//         return new ModelAndView();
//     }
// }