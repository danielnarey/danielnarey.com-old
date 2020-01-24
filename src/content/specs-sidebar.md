```sss
// 1rem = 17px

.sidebar
  width: 100%

@media (min-width: 748px) //= 44rem
  .sidebar
    position: fixed
    width: 20rem
    height: 100vw
    overflow-y: scroll

@media (min-width: 1156px) //= 68rem
  .sidebar
    width: calc(50vw - 10rem)
    padding-left: calc(50vw - 32rem)
    padding-right: 1rem
```
