```sss
// 1rem = 17px

.container
  width: 100%
  max-width: 40rem
  margin-left: auto
  margin-right: auto

@media (min-width: 748px) //= 44rem
  .container
    max-width: 100%
    margin-left: 0
    margin-right: 0
    padding-right: 1rem
    padding-left: 21rem

@media (min-width: 1156px) //= 68rem
  .container
    padding-left: calc(50vw - 8rem)
    padding-right: calc(50vw - 32rem)
```
