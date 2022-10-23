import IconDatasetLinkedFill0Wght100Grad0Opsz48 from '../components/DatasetLinkedFill0Wght100Grad0Opsz48'
import IconDatasetLinkedFill0Wght200Grad0Opsz48 from '../components/DatasetLinkedFill0Wght200Grad0Opsz48'
import IconDatasetLinkedFill0Wght300Grad0Opsz48 from '../components/DatasetLinkedFill0Wght300Grad0Opsz48'
import IconDatasetLinkedFill0Wght400Grad0Opsz48 from '../components/DatasetLinkedFill0Wght400Grad0Opsz48'
import IconDatasetLinkedFill0Wght500Grad0Opsz48 from '../components/DatasetLinkedFill0Wght500Grad0Opsz48'
import IconDatasetLinkedFill0Wght600Grad0Opsz48 from '../components/DatasetLinkedFill0Wght600Grad0Opsz48'
import IconDatasetLinkedFill0Wght700Grad0Opsz48 from '../components/DatasetLinkedFill0Wght700Grad0Opsz48'
import IconDatasetLinkedFill1Wght100Grad0Opsz48 from '../components/DatasetLinkedFill1Wght100Grad0Opsz48'
import IconDatasetLinkedFill1Wght200Grad0Opsz48 from '../components/DatasetLinkedFill1Wght200Grad0Opsz48'
import IconDatasetLinkedFill1Wght300Grad0Opsz48 from '../components/DatasetLinkedFill1Wght300Grad0Opsz48'
import IconDatasetLinkedFill1Wght400Grad0Opsz48 from '../components/DatasetLinkedFill1Wght400Grad0Opsz48'
import IconDatasetLinkedFill1Wght500Grad0Opsz48 from '../components/DatasetLinkedFill1Wght500Grad0Opsz48'
import IconDatasetLinkedFill1Wght600Grad0Opsz48 from '../components/DatasetLinkedFill1Wght600Grad0Opsz48'
import IconDatasetLinkedFill1Wght700Grad0Opsz48 from '../components/DatasetLinkedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDatasetLinked = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDatasetLinkedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDatasetLinkedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDatasetLinkedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDatasetLinkedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDatasetLinkedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDatasetLinkedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDatasetLinkedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDatasetLinkedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDatasetLinkedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDatasetLinkedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDatasetLinkedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDatasetLinkedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDatasetLinkedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDatasetLinkedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
