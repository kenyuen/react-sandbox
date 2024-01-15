# Overview

Sandbox on "Microfrontends with React: A Complete Developer's Guide" with Stephen Grider on Udemy

## Notes

Mandatory Architecture Requirements adhered:

* Zero coupling between child projects
  * No importing of functions / objects/ classes / etc
  * No shared state between child projects
  * Shared libraries through Module Federation is ok

* Near-zero coupling between container and child apps
  * Container shouldn't assume that a child is using a particular framework
  * Any necessary communication done with callbacks or simple events

* CSS from one project should not affect another

* Version control (monorepo vs separate) should not have any impact on the overall project
  * Some people want to use monorepos
  * Some people want to keep everything on a separate repo

* Container should be able to decide to always use the latest version of a microfrontend or a specific version
  * Container will always use the latest version of a child app (does not require a redeploy of container)
  * Contaner can specify exactly what version of a child it wants to use (requires a redeploy of container)
