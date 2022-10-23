import IconDatasetFill0Wght100Grad0Opsz48 from '../components/DatasetFill0Wght100Grad0Opsz48'
import IconDatasetFill0Wght200Grad0Opsz48 from '../components/DatasetFill0Wght200Grad0Opsz48'
import IconDatasetFill0Wght300Grad0Opsz48 from '../components/DatasetFill0Wght300Grad0Opsz48'
import IconDatasetFill0Wght400Grad0Opsz48 from '../components/DatasetFill0Wght400Grad0Opsz48'
import IconDatasetFill0Wght500Grad0Opsz48 from '../components/DatasetFill0Wght500Grad0Opsz48'
import IconDatasetFill0Wght600Grad0Opsz48 from '../components/DatasetFill0Wght600Grad0Opsz48'
import IconDatasetFill0Wght700Grad0Opsz48 from '../components/DatasetFill0Wght700Grad0Opsz48'
import IconDatasetFill1Wght100Grad0Opsz48 from '../components/DatasetFill1Wght100Grad0Opsz48'
import IconDatasetFill1Wght200Grad0Opsz48 from '../components/DatasetFill1Wght200Grad0Opsz48'
import IconDatasetFill1Wght300Grad0Opsz48 from '../components/DatasetFill1Wght300Grad0Opsz48'
import IconDatasetFill1Wght400Grad0Opsz48 from '../components/DatasetFill1Wght400Grad0Opsz48'
import IconDatasetFill1Wght500Grad0Opsz48 from '../components/DatasetFill1Wght500Grad0Opsz48'
import IconDatasetFill1Wght600Grad0Opsz48 from '../components/DatasetFill1Wght600Grad0Opsz48'
import IconDatasetFill1Wght700Grad0Opsz48 from '../components/DatasetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDataset = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDatasetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDatasetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDatasetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDatasetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDatasetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDatasetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDatasetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDatasetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDatasetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDatasetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDatasetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDatasetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDatasetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDatasetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
