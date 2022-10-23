import IconModelTrainingFill0Wght100Grad0Opsz48 from '../components/ModelTrainingFill0Wght100Grad0Opsz48'
import IconModelTrainingFill0Wght200Grad0Opsz48 from '../components/ModelTrainingFill0Wght200Grad0Opsz48'
import IconModelTrainingFill0Wght300Grad0Opsz48 from '../components/ModelTrainingFill0Wght300Grad0Opsz48'
import IconModelTrainingFill0Wght400Grad0Opsz48 from '../components/ModelTrainingFill0Wght400Grad0Opsz48'
import IconModelTrainingFill0Wght500Grad0Opsz48 from '../components/ModelTrainingFill0Wght500Grad0Opsz48'
import IconModelTrainingFill0Wght600Grad0Opsz48 from '../components/ModelTrainingFill0Wght600Grad0Opsz48'
import IconModelTrainingFill0Wght700Grad0Opsz48 from '../components/ModelTrainingFill0Wght700Grad0Opsz48'
import IconModelTrainingFill1Wght100Grad0Opsz48 from '../components/ModelTrainingFill1Wght100Grad0Opsz48'
import IconModelTrainingFill1Wght200Grad0Opsz48 from '../components/ModelTrainingFill1Wght200Grad0Opsz48'
import IconModelTrainingFill1Wght300Grad0Opsz48 from '../components/ModelTrainingFill1Wght300Grad0Opsz48'
import IconModelTrainingFill1Wght400Grad0Opsz48 from '../components/ModelTrainingFill1Wght400Grad0Opsz48'
import IconModelTrainingFill1Wght500Grad0Opsz48 from '../components/ModelTrainingFill1Wght500Grad0Opsz48'
import IconModelTrainingFill1Wght600Grad0Opsz48 from '../components/ModelTrainingFill1Wght600Grad0Opsz48'
import IconModelTrainingFill1Wght700Grad0Opsz48 from '../components/ModelTrainingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModelTraining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModelTrainingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModelTrainingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModelTrainingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModelTrainingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModelTrainingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModelTrainingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModelTrainingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModelTrainingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModelTrainingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModelTrainingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModelTrainingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModelTrainingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModelTrainingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModelTrainingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
