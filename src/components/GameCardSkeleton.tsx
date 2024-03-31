import { Card, Skeleton,CardBody, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width="100%" borderRadius={'10px'} overflow={'hidden'}>
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton