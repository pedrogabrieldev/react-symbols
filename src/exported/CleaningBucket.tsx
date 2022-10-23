import IconCleaningBucketFill0Wght100Grad0Opsz48 from '../components/CleaningBucketFill0Wght100Grad0Opsz48'
import IconCleaningBucketFill0Wght200Grad0Opsz48 from '../components/CleaningBucketFill0Wght200Grad0Opsz48'
import IconCleaningBucketFill0Wght300Grad0Opsz48 from '../components/CleaningBucketFill0Wght300Grad0Opsz48'
import IconCleaningBucketFill0Wght400Grad0Opsz48 from '../components/CleaningBucketFill0Wght400Grad0Opsz48'
import IconCleaningBucketFill0Wght500Grad0Opsz48 from '../components/CleaningBucketFill0Wght500Grad0Opsz48'
import IconCleaningBucketFill0Wght600Grad0Opsz48 from '../components/CleaningBucketFill0Wght600Grad0Opsz48'
import IconCleaningBucketFill0Wght700Grad0Opsz48 from '../components/CleaningBucketFill0Wght700Grad0Opsz48'
import IconCleaningBucketFill1Wght100Grad0Opsz48 from '../components/CleaningBucketFill1Wght100Grad0Opsz48'
import IconCleaningBucketFill1Wght200Grad0Opsz48 from '../components/CleaningBucketFill1Wght200Grad0Opsz48'
import IconCleaningBucketFill1Wght300Grad0Opsz48 from '../components/CleaningBucketFill1Wght300Grad0Opsz48'
import IconCleaningBucketFill1Wght400Grad0Opsz48 from '../components/CleaningBucketFill1Wght400Grad0Opsz48'
import IconCleaningBucketFill1Wght500Grad0Opsz48 from '../components/CleaningBucketFill1Wght500Grad0Opsz48'
import IconCleaningBucketFill1Wght600Grad0Opsz48 from '../components/CleaningBucketFill1Wght600Grad0Opsz48'
import IconCleaningBucketFill1Wght700Grad0Opsz48 from '../components/CleaningBucketFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCleaningBucket = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCleaningBucketFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCleaningBucketFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCleaningBucketFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCleaningBucketFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCleaningBucketFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCleaningBucketFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCleaningBucketFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCleaningBucketFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCleaningBucketFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCleaningBucketFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCleaningBucketFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCleaningBucketFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCleaningBucketFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCleaningBucketFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
