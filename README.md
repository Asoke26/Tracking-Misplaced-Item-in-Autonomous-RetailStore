# Tracking-Misplaced-Item-in-Autonomous-RetailStore


Autonomous retail is the future of retail. It enablesreal-time  inventory  monitoring,  cashierless  checkout  and  so  on.To  avail  these  features,  system  strongly  depends  on  informationfrom heterogeneous sensors in real-time. which introduces someuncharted problems among which our paper is going to addressone   of   them,   tracking   of   misplaced   inventory,   misplacementin  autonomous  retail  stores  is  presence  of  a  product  in  theshelf  where  it  is  not  intended  to  be  present  or  kept  in  theshelf  unknown  to  the  system.  This  kind  of  problem  can  leadto  sales/revenue  loss  in  these  environments,  which  is  actually  ashortcoming in the design. For the best of our knowledge, thereis  no  accurate/exclusive  method  to  address  this  problem  in  theautonomous  system.In this paper, we propose a computer vision based model whichcan  be  added  to  existing  autonomous  retail  pipeline  for  furtherverification,  also  can  be  used  as  full  phase  vision  based  retail.Pipeline includes real-time event detection and classification usingPoseNet[4],  identify  product  using  frame  difference  followed  byobject classification. Convincing results has been observed usingAiFi  dataset[5].